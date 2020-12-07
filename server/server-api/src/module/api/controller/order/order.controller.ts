import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from '../../service/order/order.service';

@Controller('order')
export class OrderController {
  constructor(private OrderService: OrderService) {}

  @Post('/lists')
  async getListByPage(@Body() body) {
    return this.OrderService.getListByPage(body.pageNum, body.pageSize);
  }
}
