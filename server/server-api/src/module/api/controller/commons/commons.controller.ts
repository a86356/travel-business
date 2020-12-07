import {Controller, Post} from '@nestjs/common';
import {CommonsService} from "../../service/commons/commons.service";
import {UserService} from "../../service/user/user.service";

@Controller('commons')
export class CommonsController {

    constructor(private commonService:CommonsService,private userService:UserService) {

    }

    @Post("/citys")
    async getCityLists(){

        return await this.commonService.findAll();
    }

}
