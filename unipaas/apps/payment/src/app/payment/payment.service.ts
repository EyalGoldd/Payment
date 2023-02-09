import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';

const key = `TCbf3GS4a725ZUYxSvQYpw==`;

@Injectable()
export class PaymentService {
    async createPayment(createPayment: CreatePaymentDto) {
        return Promise.resolve('asd');
    }
}
