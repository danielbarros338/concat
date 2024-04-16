import { Module } from '@nestjs/common';
import { OpenAIGPTController } from './openai-gpt.controller';
import { OpenAIGPTService } from './openai-gpt.service';

@Module({
  imports: [],
  controllers: [OpenAIGPTController],
  providers: [OpenAIGPTService],
})
export class OpenAIGPTModule {}
