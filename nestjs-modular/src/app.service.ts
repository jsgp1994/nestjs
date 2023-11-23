import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(
    private configService: ConfigService,
  ){}

  getHello(): string {
    const apiKey = this.configService.get<string>('APY_KEY');
    return `Hello World! ${apiKey}`;
  }
}
