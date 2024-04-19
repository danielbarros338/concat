import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as fs from 'fs';

import {
  AzureKeyCredential,
  DocumentAnalysisClient,
} from '@azure/ai-form-recognizer';

@Injectable()
export class OCRAzureService {
  constructor(private configService: ConfigService) {}

  async readImage(): Promise<any> {
    const credential = new AzureKeyCredential(
      this.configService.get<string>('AZURE_DI_KEY'),
    );

    const client = new DocumentAnalysisClient(
      this.configService.get<string>('AZURE_DI_ENDPOINT'),
      credential,
    );

    try {
      const pdf = fs.createReadStream('./tmp/catalogo_compressed.pdf');
      const poller = await client.beginAnalyzeDocument('prebuilt-read', pdf);
      const { content, pages } = await poller.pollUntilDone();

      return { content, pages };
    } catch (err) {
      return err.message;
    }
  }
}
