import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import OpenAI from 'openai';

@Injectable()
export class OpenAIGPTService {
  constructor(private configService: ConfigService) {}

  async sendMessage(body: any): Promise<any> {
    const openAI = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_KEY'),
    });

    const completion = await openAI.chat.completions.create({
      messages: [{ role: 'system', content: body.text() }],
      model: 'gpt-3.5-turbo',
    });

    return completion.choices[0];
  }
}
