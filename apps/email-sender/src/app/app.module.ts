import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailSenderModule } from './email-sender/email-sender.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        }),
        EmailSenderModule
    ]
})
export class AppModule {
}
