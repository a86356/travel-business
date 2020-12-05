import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  Headers,
} from '@nestjs/common';
import { ValidatePipe } from '../../pipe/validate.pipe';
import { UserLoginDto } from '../../dto/userLoginDto';
import { UserService } from '../../service/user/user.service';

@Controller('admin')
export class DetailController {
  constructor(private userService: UserService) {}

}
