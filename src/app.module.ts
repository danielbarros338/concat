import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { OpenAIGPTModule } from './openai-gpt/openai-gpt.module';
import { OCRAzureModule } from './ocr-azure/ocr-azure.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    OpenAIGPTModule,
    OCRAzureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
