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

  async processPDFOCR(pdfContent: string): Promise<any> {
    const openAI = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_KEY'),
    });

    // TODO: Criar lógica para buscar prompts diferentes
    // MOCKED
    const prompt = this.configService.get<string>('PROMPT');

    const completion = await openAI.chat.completions.create({
      messages: [
        { role: 'system', content: prompt + pdfContent },
        { role: 'user', content: 'Just returns a JSON with catalog' },
      ],
      model: this.configService.get<string>('OPENAI_GPT_MODEL'),
      temperature: 0,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: null,
    });

    const responseNotFormated = completion.choices[0].message.content;
    const firstOpenBraceIndex = responseNotFormated.indexOf('{');
    const lastCloseBraceIndex = responseNotFormated.lastIndexOf('}');
    const responseFormated = responseNotFormated.substring(
      firstOpenBraceIndex,
      lastCloseBraceIndex + 1,
    );

    return JSON.parse(responseFormated);
  }
}
