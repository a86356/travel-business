import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {User} from "../../../../entity/user";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.usersRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}