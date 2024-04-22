import { Module } from '@nestjs/common';
import { PdfFormaterController } from './pdf-formater.controller';
import { PdfFormaterService } from './pdf-formater.service';
import { OCRAzureService } from 'src/ocr-azure/ocr-azure.service';
import { OpenAIGPTService } from 'src/openai-gpt/openai-gpt.service';

@Module({
  imports: [],
  controllers: [PdfFormaterController],
  providers: [PdfFormaterService, OCRAzureService, OpenAIGPTService],
})
export class PdfFormaterModule {}
