import { Controller, Post } from '@nestjs/common';
import { OCRAzureService } from './ocr-azure.service';

@Controller('send-image')
export class OCRAzureController {
  constructor(private readonly ocrAzureService: OCRAzureService) {}

  @Post()
  async sendImage(): Promise<any> {
    return await this.ocrAzureService.readImage();
  }
}
