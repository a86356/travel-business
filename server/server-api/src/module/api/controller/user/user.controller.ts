import {Body, Controller, Get, HttpException, HttpStatus, Post, UsePipes} from '@nestjs/common';
import {UserService} from "../../service/user/user.service";
import {ValidatePipe} from "../../pipe/validate.pipe";
import {UserLoginDto} from "../../dto/userLoginDto";

@Controller('user')
export class UserController {

    constructor(private userservice:UserService) {
    }

    @Post()

    async index(@Body() body: UserLoginDto){
        return await this.userservice.findAll()
    }

}
