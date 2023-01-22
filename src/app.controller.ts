import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiConfigService } from './modules/api-config/api-config.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly apiConfigService: ApiConfigService,
  ) {}

  @Get()
  getHello() {
    return {
      nodeEnv: this.apiConfigService.nodeEnv,
    };
  }
}
