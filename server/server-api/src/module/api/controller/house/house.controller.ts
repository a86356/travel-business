import {Body, Controller, Post} from '@nestjs/common';
import {HouseService} from "../../service/house/house.service";

@Controller('house')
export class HouseController {

    constructor(private houseService:HouseService) {

    }

    @Post("/hot")
    async getCityLists(){

        return await this.houseService.findList({type:"1"});
    }

    @Post("/search")
    async getSearchLists(@Body() body){
        let obj={};
        if(body.value){
            obj={title:body.value}
        }
        
        return await this.houseService.findList(obj);
    }

}
