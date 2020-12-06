import {Controller, Post} from '@nestjs/common';
import {CommonsService} from "../../service/commons/commons.service";

@Controller('commons')
export class CommonsController {

    constructor(private commonService:CommonsService) {

    }

    @Post("/citys")
    async getCityLists(){

        console.log(this.commonService.findAll())
        return await this.commonService.findAll();
    }

}
