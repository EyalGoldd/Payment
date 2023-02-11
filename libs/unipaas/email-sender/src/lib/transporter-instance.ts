import * as nodemailer from 'nodemailer'

export const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "8b58e3b189f02e",
        pass: "64d7680aeedc60"
    }
});
