import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { PdfFormaterService } from './pdf-formater.service';

@Controller('process-pdf')
export class PdfFormaterController {
  constructor(private readonly pdfFormaterService: PdfFormaterService) {}

  @Post()
  async processPdf(@Req() req: Request): Promise<any> {
    return await this.pdfFormaterService.processPdf(
      req.body.base64,
      req.body.archiveName,
    );
  }
}
