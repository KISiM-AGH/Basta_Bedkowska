import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { WordService } from './word.service';
import { CreateBookDto } from './dto/create-word.dto';

@Controller('word')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get()
  getWords() {
    return this.wordService.get();
  }

  @Get(':id')
  getWord(@Param('id') id: number) {
    return this.wordService.getById(id);
  }

  @Post()
  createWord(@Body() body: CreateBookDto) {
    return this.wordService.create(body);
  }

  @Delete(':id')
  @HttpCode(204)
  removeWord(@Param('id') id: number) {
    return this.wordService.remove(id);
  }
}
