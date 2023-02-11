import { Module } from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';
import { EmailSenderController } from './email-sender.controller';
import { transportProvider } from './transporter-instance';

@Module({
    controllers: [EmailSenderController],
    providers: [EmailSenderService, transportProvider],
    exports: [EmailSenderService],
})
export class EmailSenderModule {}

