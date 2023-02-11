import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { CreatePaymentResponseDto } from './dto/create-payment-response.dto';
import { CreatePaymentBadRequestDto } from './dto/create-payment-bad-request.dto';

@Controller('payment')
export class PaymentController {

    constructor(private readonly paymentService: PaymentService) {
    }

    @ApiInternalServerErrorResponse()
    @ApiBadRequestResponse({description: 'Exception on UNIPasS endpoint', type: CreatePaymentBadRequestDto})
    @ApiCreatedResponse({
        description: 'Create Payment',
        type: CreatePaymentResponseDto,
    })
    @Post()
    public async createPayment(@Body() createPayment: CreatePaymentDto) {
        return await this.paymentService.createPayment(createPayment);
    }
}
