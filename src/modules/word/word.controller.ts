import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  HttpCode,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { WordService } from './word.service';
import { CreateWordDto } from './dto/create-word.dto';
import { FilterWordDto } from './dto/filter-word.dto';

@Controller('word')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get()
  getWords(@Query() query: FilterWordDto) {
    return this.wordService.get(query);
  }

  @Get(':id')
  getWord(@Param('id', ParseIntPipe) id: number) {
    return this.wordService.getById(id);
  }

  @Post()
  createWord(@Body() body: CreateWordDto) {
    return this.wordService.create(body);
  }

  @Delete(':id')
  @HttpCode(204)
  removeWord(@Param('id', ParseIntPipe) id: number) {
    return this.wordService.remove(id);
  }
}
