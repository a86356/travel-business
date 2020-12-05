import { IsString, Length } from 'class-validator';

export class UserLoginDto {
  @IsString()
  @Length(6, 20, { message: '用户名长度不合法' })
  readonly username: string;
  @Length(6, 20, { message: '密码长度必须是6-20位' })
  readonly password: string;
}
