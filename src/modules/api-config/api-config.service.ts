import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private readonly config: ConfigService) {}

  get nodeEnv(): string {
    return this.config.get<string>('NODE_ENV');
  }

  get isDevelopment(): boolean {
    return this.nodeEnv.toLowerCase() === 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv.toLowerCase() === 'production';
  }
}
