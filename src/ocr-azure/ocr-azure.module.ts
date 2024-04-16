import { Module } from '@nestjs/common';
import { OCRAzureController } from './ocr-azure.controller';
import { OCRAzureService } from './ocr-azure.service';

@Module({
  imports: [],
  controllers: [OCRAzureController],
  providers: [OCRAzureService],
})
export class OCRAzureModule {}
