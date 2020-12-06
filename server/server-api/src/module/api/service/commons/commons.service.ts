import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {City} from "../../../../entity/City.entity";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommonsService {
    constructor(
        @InjectRepository(City)
        private repository: Repository<City>,
    ) {}

    async findAll(): Promise<City[]> {
        return await this.repository.find();
    }


}