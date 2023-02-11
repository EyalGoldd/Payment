import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentResponseDto {
    constructor(paymentLink: string) {
        this.paymentLink = paymentLink;
    }
    @ApiProperty()
    paymentLink: string
}
