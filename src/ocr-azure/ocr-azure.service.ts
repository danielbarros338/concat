import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// import { ImageAnalysisClient } from '@azure-rest/ai-vision-image-analysis';
import { AzureKeyCredential } from '@azure/core-auth';
import createClient from '@azure-rest/ai-vision-image-analysis';

@Injectable()
export class OCRAzureService {
  constructor(private configService: ConfigService) {}

  async readImage(): Promise<void> {
    const credential = new AzureKeyCredential(
      this.configService.get<string>('AZURE_VISION_KEY'),
    );

    const client = createClient(
      this.configService.get<string>('AZURE_VISION_ENDPOINT'),
      credential,
    );

    const features = ['Caption', 'Read'];
    const imageUrl =
      'https://learn.microsoft.com/azure/ai-services/computer-vision/media/quickstarts/presentation.png';

    const result = await client.path('/imageanalysis:analyze').post({
      body: { url: imageUrl },
      queryParameters: { features: features },
      contentType: 'application/json',
    });

    const iaResult: any = result.body;

    return iaResult.readResult.blocks;
  }
}
