import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {

    constructor(private readonly paymentService: PaymentService) {
    }

    @Post()
    public async createPayment(@Body() createPayment: CreatePaymentDto) {
        return await this.paymentService.createPayment(createPayment);
    }
}
