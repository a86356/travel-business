import {
  Injectable,
  Headers,
  Scope,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../entity/user.entity';
import { getRandom } from '../../../../utils/Random';

import { encryptPwd } from '../../../../utils/encrypt';

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(REQUEST) private readonly request: Request,
  ) {}

  async getUserInfo(): Promise<User> {
    const token: any = this.request.headers.token;
    return await this.usersRepository.findOne({ token: token });
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async updateUserinfo(body): Promise<void> {
    const { tel, sign, avatar } = body;
    const userinfo = await this.getUserInfo();
    if (userinfo) {
      const userentity = new User();
      userentity.id = userinfo.id;
      userentity.tel = tel;
      userentity.sign = sign;
      userentity.avatar = avatar;
      await this.usersRepository.save(userentity);
    }
  }

  async register(body): Promise<void> {
    const { username, password } = body;

    //用户名是不是注册过
    const oldUser = await this.usersRepository.findOne({ username: username });
    if (oldUser) {
      throw new HttpException('用户名已存在请换一个', HttpStatus.BAD_REQUEST);
    }
    //加密后的md5密码
    let newPwd = encryptPwd(password);

    //随机生成的token
    const token = getRandom(32);

    const entity = new User();
    entity.id = 0;
    entity.username = username;
    entity.password = newPwd;
    entity.token = token;
    entity.avatar =
      'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg';
    this.usersRepository.save(entity);
  }

  async login(body): Promise<User> {
    const { username, password } = body;

    //用户名是不是注册过
    const oldUser = await this.usersRepository.findOne({ username: username });
    if (!oldUser) {
      throw new HttpException('用户名不存在', HttpStatus.BAD_REQUEST);
    }

    //加密后的md5密码
    let newPwd = encryptPwd(password);

    const user2 = await this.usersRepository.findOne({
      username: username,
      password: newPwd,
    });
    if (!user2) {
      throw new HttpException('密码错误', HttpStatus.BAD_REQUEST);
    }

    return user2;
  }
}
