import {Body, Controller, Get, Post} from '@nestjs/common';

@Controller('payment')
export class PaymentController {
  @Post()
  public async createPayment(@Body() createPayment: CreatePaymentDto) {

  }
}
