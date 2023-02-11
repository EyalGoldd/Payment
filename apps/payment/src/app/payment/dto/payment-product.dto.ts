import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import { PaymentProduct } from '@unipaas/types';

export class PaymentProductDto implements PaymentProduct {
    @IsPositive()
    @IsNumber()
    @ApiProperty({default:5})
    amount: number;
    @IsString()
    @ApiProperty()
    name: string;

    @IsNumber()
    @ApiProperty({default: 5})
    platformFee: number;

    @IsNumber()
    @IsPositive()
    @ApiProperty({default: 5})
    quantity: number;
}
