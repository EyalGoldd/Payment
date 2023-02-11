import { Inject, Injectable, Logger } from '@nestjs/common';
import { NodeMailerTransport, Transport } from './transporter-instance';

@Injectable()
export class EmailSenderService {
    constructor(@Inject(Transport) private readonly transport: NodeMailerTransport) {
    }
    private readonly logger = new Logger(EmailSenderService.name);

    public async sendEmail(email: string) {
        await this.transport.sendMail({
            from: 'eyalgoldd@gmail.com',
            to: email,
            subject: 'Successful payment!',
            text: 'Successful payment!',
            html: 'Successful payment!'
        });
        this.logger.log(`Email was successfully sent to ${email}!`)
    }
}
