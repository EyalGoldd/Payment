import { Injectable } from '@nestjs/common';
import { transport } from './transporter-instance';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailSenderService {
    constructor() {}

    public async sendEmail(email: string) {
        console.log({ email })
        let info = await transport.sendMail({
            from: 'eyalgoldd@gmail.com', // sender address
            to: email, // list of receivers
            subject: 'Successful payment', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' // html body
        });

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
}
