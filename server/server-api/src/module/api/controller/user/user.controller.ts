import {Controller, Get, HttpException, HttpStatus} from '@nestjs/common';
import {UserService} from "../../service/user/user.service";

@Controller('user')
export class UserController {

    constructor(private userservice:UserService) {
    }

    @Get()
    index(){

        throw new HttpException("throw a error of bad request~!!!!",HttpStatus.BAD_REQUEST);
        return this.userservice.getString()
    }

}
