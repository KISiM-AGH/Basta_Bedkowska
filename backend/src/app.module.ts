import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './modules/game/game.module';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigModule } from './modules/api-config/api-config.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { WordModule } from './modules/word/word.module';

@Module({
  imports: [
    GameModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ApiConfigModule,
    PrismaModule,
    WordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
