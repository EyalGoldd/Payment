import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, RmqOptions, Transport } from '@nestjs/microservices';
import { RmqQueues } from './rmq-queues';
import { RmqService } from './rmq.service';

@Module({
    controllers: [],
    providers: [RmqService, RmqModule.generateProvider(RmqQueues.EmailSenderSend)],
    exports: [RmqService]
})
export class RmqModule {
    public static genericQueueListenerGenerator = (
        configService: ConfigService,
        queue: RmqQueues
    ): RmqOptions => {
        return {
            transport: Transport.RMQ,
            options: {
                urls: [
                    `amqp://${configService.get(
                        'RABBITMQ_USER'
                    )}:${configService.get(
                        'RABBITMQ_PASSWORD'
                    )}@${configService.get('RABBITMQ_HOST')}`
                ],
                queue,
                prefetchCount: 100,
                queueOptions: {
                    durable: true
                }
            }
        };
    };

    public static generateProvider(queue: RmqQueues) {
        return {
            provide: queue,
            inject: [ConfigService],
            useFactory: (configService: ConfigService) =>
                ClientProxyFactory.create(RmqModule.genericQueueListenerGenerator(configService, queue))
        };
    }
}
