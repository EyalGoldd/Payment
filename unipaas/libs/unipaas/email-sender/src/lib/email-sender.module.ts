import { Module } from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';

@Module({
    controllers: [],
    providers: [EmailSenderService],
    exports: [EmailSenderService],
})
export class EmailSenderModule {}
