import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UNIPaaSApiService } from '@unipaas/api';
import { CreatePaymentResponseDto } from './dto/create-payment-response.dto';
import { RmqService } from '@unipaas/rmq';

@Injectable()
export class PaymentService {
    constructor(private readonly uniPaaSApiService: UNIPaaSApiService, private readonly rmqService:RmqService) {
    }

    public async createPayment(createPayment: CreatePaymentDto) {
        const response = await this.uniPaaSApiService.payInCheckout(createPayment);
        if(response) {
            this.rmqService.sendEmail({email: createPayment.email});
        }

        return new CreatePaymentResponseDto(response.shortLink)
    }
}
