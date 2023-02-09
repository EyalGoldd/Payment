import { ApiProperty } from '@nestjs/swagger';
import { PaymentBillingAddressDto } from './payment-billing-address.dto';
import { CreatePayment } from '../types/create-payment';
import { PaymentProductDto } from './payment-product.dto';
import { PaymentShippingAddressDto } from './payment-shipping-address.dto';
import {
    IsBoolean,
    IsCurrency,
    IsObject,
    IsOptional,
    IsPositive,
    IsString,
    MaxLength,
    ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePaymentDto implements CreatePayment {
    @IsPositive()
    @ApiProperty({ required: true, default: 100 })
    amount: number;

    @MaxLength(3)
    @IsString()
    @ApiProperty({ default: 'GB', required: true })
    country: string;

    @IsString()
    @ApiProperty({ required: true, default: 'USD' })
    currency: string;

    @ValidateNested()
    @Type(() => PaymentBillingAddressDto)
    @ApiProperty({ type: PaymentBillingAddressDto })
    billingAddress: PaymentBillingAddressDto;

    @ApiProperty()
    description: string;

    @ApiProperty()
    dueDate: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
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
