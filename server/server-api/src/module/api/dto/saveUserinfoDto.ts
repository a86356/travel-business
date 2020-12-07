import { IsString, Length } from 'class-validator';

export class saveUserinfoDto {
  @IsString()
  @Length(11, 11, { message: '手机号码长度是11位' })
  readonly tel: string;

  @IsString()
  @Length(1, 60, { message: '签名长度在1-60个字符之间' })
  readonly sign: string;

  @IsString()
  @Length(1, 330, { message: '请上传头像' })
  readonly avatar: string;
}
