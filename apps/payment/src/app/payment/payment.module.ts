import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { UNIPaaSApiModule } from '@unipaas/api';
import { RmqModule } from '@unipaas/rmq';

@Module({
    controllers: [PaymentController],
    providers: [PaymentService],
    imports: [UNIPaaSApiModule, RmqModule]
})
export class PaymentModule {
}
