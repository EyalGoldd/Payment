import { PaymentProduct } from '../types/create-payment';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

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

    @IsString()
    @ApiProperty()
    vendorId: string;
}
