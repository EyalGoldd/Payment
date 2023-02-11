import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { CreatePayment } from '@unipaas/types';
import { UNIPassErrorResult } from './types/unipass-error-result';

const privateKey = `TCbf3GS4a725ZUYxSvQYpw==`;

@Injectable()
export class UNIPaaSApiService {
    constructor(private readonly httpService: HttpService) {}

    public async payInCheckout(createPayment: CreatePayment) {
        const data = JSON.stringify(createPayment);
        try {
            const response = await this.httpService.axiosRef.post('https://sandbox.unipaas.com/platform/pay-ins/checkout', data, {
                headers: {
                    'content-type': 'application/json',
                    authorization: 'Bearer TCbf3GS4a725ZUYxSvQYpw=='
                }
            });
            return response.data;
        } catch (e) {
            this.handleHttpError(e);
        }
    }

    private handleHttpError(error: AxiosError) {
        if (error?.isAxiosError) {
            if (error.response.status === 400) {
                const errorResult = error.response.data as UNIPassErrorResult
                throw new BadRequestException({ reason: errorResult.message });
            }
        }
        throw new InternalServerErrorException();
    }
}

