import { Controller } from '@nestjs/common';
import { EmailSenderService } from './email-sender.service';
import { RmqQueues, SendEmailContract } from '@unipaas/rmq';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class EmailSenderController {
    constructor(private readonly emailSenderService:EmailSenderService) {}

    @EventPattern(RmqQueues.EmailSenderSend)
    public async sendEmail(message: SendEmailContract) {
        await this.emailSenderService.sendEmail(message.email);
    }
}
