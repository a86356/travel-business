import { IsString, Length } from 'class-validator';

export class registerDto {
  @IsString()
  @Length(1, 20, { message: '用户名长度必须是1-20个字符' })
  readonly username: string;

  @IsString()
  @Length(1, 20, { message: '密码长度必须是1-20个字符' })
  readonly password: string;
}
