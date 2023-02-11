import { ApiProperty } from '@nestjs/swagger';
import { PaymentBillingAddressDto } from './payment-billing-address.dto';
import { PaymentProductDto } from './payment-product.dto';
import { PaymentShippingAddressDto } from './payment-shipping-address.dto';
import {
    IsBoolean, IsDateString,
    IsEmail,
    IsObject,
    IsOptional,
    IsPositive,
    IsString,
    MaxLength,
    ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePayment } from '@unipaas/types';

export class CreatePaymentDto implements CreatePayment {
    @IsPositive()
    @ApiProperty({ required: true, default: 100 })
    amount: number;

    @MaxLength(3)
    @IsString()
    @ApiProperty({ default: 'GB', required: true })
    country: string;

    @IsString()
    @ApiProperty({ required: true, default: 'GBP' })
    currency: string;

    @ValidateNested()
    @Type(() => PaymentBillingAddressDto)
    @ApiProperty({ type: PaymentBillingAddressDto })
    billingAddress: PaymentBillingAddressDto;

    @IsOptional()
    @IsString()
    @ApiProperty()
    description: string;

    @IsOptional()
    @IsDateString()
    @ApiProperty({required:false, default:'2023-05-01'})
    dueDate: string;

    @IsOptional()
    @IsEmail()
    @ApiProperty({required:false, default:'eyalgoldd@gmail.com'})
    email: string;

    @IsOptional()
    @IsString()
    @ApiProperty({required:false, default:'https://google.com'})
    invoiceUrl: string;

    @ValidateNested({ each: true })
    @Type(() => PaymentProductDto)
    @ApiProperty({ type: PaymentProductDto, isArray: true })
    items: PaymentProductDto[];

    @IsObject()
    @ApiProperty()
    metadata: object;

    @ApiProperty()
    orderId: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    reference: string;


    @ValidateNested()
    @Type(() => PaymentShippingAddressDto)
    @IsOptional()
    @ApiProperty({ required: false })
    shippingAddress?: PaymentShippingAddressDto;

    @IsBoolean()
    @ApiProperty()
    shippingSameAsBilling: boolean;

    @ApiProperty()
    successfulPaymentRedirect: string;

    @ApiProperty()
    vatAmount: number;
}
