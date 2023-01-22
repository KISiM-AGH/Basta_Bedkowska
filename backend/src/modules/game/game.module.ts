import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { WordModule } from '../word/word.module';
import { WordService } from '../word/word.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [GameController],
  providers: [GameService, WordService, PrismaService],
  imports: [WordModule, PrismaModule],
})
export class GameModule {}
