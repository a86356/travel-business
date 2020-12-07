import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
} from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import { ValidatePipe } from '../../pipe/validate.pipe';
import { UserLoginDto } from '../../dto/userLoginDto';
import { toUserInfoDto } from '../../dto/toUserinfoDto';
import { saveUserinfoDto } from '../../dto/saveUserinfoDto';
import { registerDto } from '../../dto/registerDto';

@Controller('user')
export class UserController {
  constructor(private userservice: UserService) {}

  @Post()
  async index(@Body() body: UserLoginDto) {
    return await this.userservice.findAll();
  }

  @Post('/info')
  async getUserinfo() {
    return toUserInfoDto(await this.userservice.getUserInfo());
  }

  @Post('/saveinfo')
  async saveUserinfo(@Body() body: saveUserinfoDto) {
    return await this.userservice.updateUserinfo(body);
  }

  @Post('/register')
  async register(@Body() body: registerDto) {
    return await this.userservice.register(body);
  }
}
