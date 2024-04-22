import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OCRAzureService } from 'src/ocr-azure/ocr-azure.service';
import { OpenAIGPTService } from 'src/openai-gpt/openai-gpt.service';

@Injectable()
export class PdfFormaterService {
  constructor(
    private configService: ConfigService,
    private ocrAzureService: OCRAzureService,
    private openAIGPTService: OpenAIGPTService,
  ) {}

  async processPdf(base64: string, archiveName: string): Promise<void> {
    const processedPDF = await this.ocrAzureService.readImage(
      base64,
      archiveName,
    );

    const gptResponse = await this.openAIGPTService.processPDFOCR(
      processedPDF.content,
    );

    return await gptResponse;
  }
}
