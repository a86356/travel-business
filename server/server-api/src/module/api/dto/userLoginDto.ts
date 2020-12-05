import { IsString, Length } from 'class-validator';

export class UserLoginDto {
    @IsString()
    @Length(6, 20, { message: '登陆账号长度不合法' })
    readonly username: string;
    @Length(6, 20, { message: '密码必须是6-20位的长度' })
    readonly password: string;
}
