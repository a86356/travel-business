import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from '../../../../entity/Comment.entity';
import { Repository } from 'typeorm';
import { City } from '../../../../entity/City.entity';
import { UserService } from '../user/user.service';

import { getTimeStamp } from '../../../../utils/Timer';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private repository: Repository<Comment>,
    private UserService: UserService,
  ) {}

  async getListByPage(pageNum = 1, pageSize = 4): Promise<Comment[]> {
    const sql =
      'select * from comment limit ' + (pageNum - 1) + ',' + pageNum * pageSize;
    return this.repository.query(sql);
  }

  async addComment(msg: string) {
    const user = this.UserService.getUserInfo();

    user.then((res) => {
      const { avatar, username } = res;
      const comment = new Comment();
      comment.avatar = avatar;
      comment.createTime = getTimeStamp();
      comment.info = msg;
      comment.username = username;
      return this.repository.save(comment);
    });
  }
}
