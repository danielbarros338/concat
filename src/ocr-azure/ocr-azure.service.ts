import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OCRAzureService {
  constructor(private configService: ConfigService) {}
}
