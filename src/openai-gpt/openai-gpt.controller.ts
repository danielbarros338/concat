import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { OpenAIGPTService } from './openai-gpt.service';

@Controller('send-message')
export class OpenAIGPTController {
  constructor(private readonly openAIGPTService: OpenAIGPTService) {}

  @Post()
  async sendMessage(@Req() req: Request): Promise<any> {
    return await this.openAIGPTService.sendMessage(req.body.teste);
  }
}
