import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UNIPaaSApiService } from './unipaas-api.service';

@Module({
    providers: [UNIPaaSApiService],
    exports: [UNIPaaSApiService],
    imports: [HttpModule]
})
export class UNIPaaSApiModule {}
