import { Body, Controller, Post } from '@nestjs/common';
import { CommentsService } from '../../service/comments/comments.service';
import { UserService } from '../../service/user/user.service';
import { addCommentDto } from '../../dto/addCommentDto';

@Controller('comments')
export class CommentsController {
  constructor(
    private commentsService: CommentsService,
    private UserService: UserService,
  ) {}

  @Post('/lists')
  async getListByPage(@Body() body) {
    return this.commentsService.getListByPage(body.pageNum, body.pageSize);
  }

  @Post('/add')
  async addComments(@Body() body: addCommentDto) {
    const res = await this.commentsService.addComment(body.comment);
    return '';
  }
}
