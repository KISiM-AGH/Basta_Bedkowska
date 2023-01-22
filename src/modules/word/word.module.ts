import { Module } from '@nestjs/common';
import { WordService } from './word.service';
import { WordController } from './word.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [WordController],
  providers: [WordService],
  imports: [PrismaModule],
})
export class WordModule {}
