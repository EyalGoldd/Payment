import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RmqQueues } from './rmq-queues'
import { catchError, of } from 'rxjs';

@Injectable()
export class RmqService {
    constructor(
        @Inject(RmqQueues.EmailSenderSend)
        private emailSenderSendClient: ClientProxy
    ) {
    }

    public sendEmail(content: { email: string }) {
        this.emit(this.emailSenderSendClient, RmqQueues.EmailSenderSend, content);
    }

    private emit(
        client: ClientProxy,
        messageType: string,
        content: object
    ): void {
        client
            .emit(messageType, content)
            .pipe(catchError(val => of({ error: val })));
    }
}
