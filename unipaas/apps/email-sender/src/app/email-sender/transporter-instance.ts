import * as nodemailer from 'nodemailer'
import { Provider } from '@nestjs/common';

export interface NodeMailerTransport {
    sendMail(content: object): Promise<void>
}

export const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "8b58e3b189f02e",
        pass: "64d7680aeedc60"
    }
});
export const Transport = 'Transport'
export const transportProvider: Provider = {
    provide: Transport,
    useValue: nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "8b58e3b189f02e",
            pass: "64d7680aeedc60"
        }
    })
}
