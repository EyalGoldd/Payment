import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { CreatePaymentResponseDto } from './dto/create-payment-response.dto';

@Controller('payment')
export class PaymentController {

    constructor(private readonly paymentService: PaymentService) {
    }

    @ApiCreatedResponse({
        description: 'Create Payment',
        type: CreatePaymentResponseDto,
    })
    @Post()
    public async createPayment(@Body() createPayment: CreatePaymentDto) {
        return await this.paymentService.createPayment(createPayment);
    }
}
