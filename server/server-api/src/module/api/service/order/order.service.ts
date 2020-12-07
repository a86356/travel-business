import { Injectable } from '@nestjs/common';
import { Comment } from '../../../../entity/Comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Comment)
    private repository: Repository<Comment>,
  ) {}

  async getListByPage(pageNum = 1, pageSize = 4): Promise<Comment[]> {
    const sql =
      'select * from t_order limit ' + (pageNum - 1) + ',' + pageNum * pageSize;

    return this.repository.query(sql);
  }
}
