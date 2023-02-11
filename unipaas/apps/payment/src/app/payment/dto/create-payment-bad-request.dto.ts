import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentBadRequestDto {
    @ApiProperty({type: String, isArray:true})
    reason: string[]
}
