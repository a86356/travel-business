import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidatePipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata): Promise<any> {
    if (!metatype || !this.toValidate(metatype)) {
      // 如果不是注入的数据且不需要验证，直接跳过处理
      return value;
    }
    // 数据格式转换
    const object = plainToClass(metatype, value);
    // 调用验证
    const errors = await validate(object);
    // 如果错误长度大于0，证明出错，需要抛出400错误
    if (errors.length > 0) {
      throw new HttpException(
        errors[0].constraints.length,
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  }

  /**
   * 需要验证的数据类型
   * @param metatype
   */
  private toValidate(metatype: any): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
