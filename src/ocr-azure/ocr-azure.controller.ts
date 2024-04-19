import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { OCRAzureService } from './ocr-azure.service';
import { ResponseDIContent } from './interfaces/ocr-azure.interfaces';

@Controller('send-image')
export class OCRAzureController {
  constructor(private readonly ocrAzureService: OCRAzureService) {}

  @Post()
  async sendImage(@Req() req: Request): Promise<ResponseDIContent> {
    return await this.ocrAzureService.readImage(
      req.body.base64,
      req.body.archiveName,
    );
  }
}
