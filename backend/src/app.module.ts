import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordModule } from './modules/word/word.module';
import { GameModule } from './modules/game/game.module';

@Module({
  imports: [WordModule, GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
