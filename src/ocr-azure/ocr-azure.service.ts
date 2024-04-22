import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as fs from 'fs';
import * as path from 'path';

import {
  AzureKeyCredential,
  DocumentAnalysisClient,
} from '@azure/ai-form-recognizer';
import { ResponseDIContent } from './interfaces/ocr-azure.interfaces';

@Injectable()
export class OCRAzureService {
  constructor(private configService: ConfigService) {}

  async readImage(base64: string, archiveName: string): Promise<any> {
    const credential = new AzureKeyCredential(
      this.configService.get<string>('AZURE_DI_KEY'),
    );

    const client = new DocumentAnalysisClient(
      this.configService.get<string>('AZURE_DI_ENDPOINT'),
      credential,
    );

    const pathArchive = path.join(`./tmp/${archiveName}.pdf`);

    try {
      const archive = Buffer.from(base64, 'base64');

      fs.writeFileSync(pathArchive, archive);
    } catch (err) {
      return err.message;
    }

    try {
      const pdf = fs.createReadStream(pathArchive);
      const poller = await client.beginAnalyzeDocument('prebuilt-read', pdf);
      const DIContent = await poller.pollUntilDone();

      const response: ResponseDIContent = {
        content: DIContent.content,
        pages: DIContent.pages,
      };

      fs.unlink(pathArchive, () => console.log('Archive removed.'));

      return response;
    } catch (err) {
      return err.message;
    }
  }
}
