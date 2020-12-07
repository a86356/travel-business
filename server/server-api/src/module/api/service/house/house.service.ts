import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { House } from '../../../../entity/House.entity';
import { Repository } from 'typeorm';
import { City } from '../../../../entity/City.entity';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(House)
    private repository: Repository<House>,
  ) {}

  async findList(obj: any = {}): Promise<House[]> {
    return await this.repository.find(obj);
  }
}
