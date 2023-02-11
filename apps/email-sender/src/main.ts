import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { RmqModule, RmqQueues } from '@unipaas/rmq';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService: ConfigService = app.get(ConfigService);
    app.connectMicroservice(RmqModule.genericQueueListenerGenerator(configService, RmqQueues.EmailSenderSend));
    await app.startAllMicroservices();

    Logger.log(
        `🚀 Application is running`
    );
}

bootstrap();
