import { IsString, Length } from 'class-validator';

export class addCommentDto {
    @IsString()
    @Length(1, 100, { message: '请填写评论的内容' })
    readonly comment: string;
}
