import { Body, Controller, Post } from '@nestjs/common';
import { HouseService } from '../../service/house/house.service';
import { houseDetailDto } from '../../dto/houseDetailDto';

@Controller('house')
export class HouseController {
  constructor(private houseService: HouseService) {}

  @Post('/hot')
  async getCityLists() {
    return await this.houseService.findList({ type: '1' });
  }

  @Post('/search')
  async getSearchLists(@Body() body) {
    let obj = {};
    if (body.value) {
      obj = { title: body.value };
    }

    return await this.houseService.findList(obj);
  }

  @Post('/detail')
  async getDetail(@Body() body) {
    console.log(body.id);

    const detail = await this.houseService.findList({ id: body.id });

    // const bannerList = await this.BannerService.getList(body.id);

    return {
      info: detail[0],
      banner: [
        'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
        'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
        'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
      ],
    };
  }
}
