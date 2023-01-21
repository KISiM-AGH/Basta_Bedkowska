import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordModule } from './modules/word/word.module';
import { GameModule } from './modules/game/game.module';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigModule } from './modules/api-config/api-config.module';

@Module({
  imports: [
    WordModule,
    GameModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ApiConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
