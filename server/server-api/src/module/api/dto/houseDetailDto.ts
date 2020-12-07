import { IsString, Length } from 'class-validator';

export class houseDetailDto {
  @IsString()
  @Length(1, 20, { message: '必须传一个商品id' })
  readonly id: string;
}
