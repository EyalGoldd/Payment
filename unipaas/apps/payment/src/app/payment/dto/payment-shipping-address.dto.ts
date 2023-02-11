import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { PaymentShippingAddress } from '@unipaas/types';

export class PaymentShippingAddressDto implements PaymentShippingAddress{

    @IsString()
    @ApiProperty()
    city: string;

    @IsString()
    @ApiProperty({default:'GB'})
    country: string;

    @IsString()
    @ApiProperty()
    firstName: string;

    @IsString()
    @ApiProperty()
    lastName: string;

    @IsString()
    @ApiProperty()
    line1: string;

    @IsString()
    @ApiProperty()
    line2: string;

    @IsString()
    @ApiProperty()
    postalCode: string;

    @IsString()
    @ApiProperty()
    state: string;
}
