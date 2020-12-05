import {Body, Controller, Get, Post, Query} from '@nestjs/common';

@Controller('user')
export class UserController {
    // http get post
    @Post('/index')
    index(@Body() body): string {
        console.log(body)

        return body;
    }

}
