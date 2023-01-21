import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { WordService } from './word.service';

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
  createWord(@Body() body: any) {
    return this.wordService.create(body.word);
  }

  @Delete(':id')
  removeWord(@Param('id') id: number) {
    return this.wordService.remove(id);
  }
}
