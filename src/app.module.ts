import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';

import { OpenAIGPTModule } from './openai-gpt/openai-gpt.module';
import { OCRAzureModule } from './ocr-azure/ocr-azure.module';
import { PdfFormaterModule } from './pdf-formater/pdf-formater.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    OpenAIGPTModule,
    OCRAzureModule,
    PdfFormaterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
