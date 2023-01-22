import { Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WordService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createWordDto: CreateWordDto) {
    return this.prismaService.word.create({
      data: {
        word: createWordDto.word,
        description: createWordDto.description,
        category: createWordDto.category,
      },
    });
  }

  findAll() {
    return `This action returns all word`;
  }

  findOne(id: number) {
    return `This action returns a #${id} word`;
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    return `This action updates a #${id} word`;
  }

  remove(id: number) {
    return `This action removes a #${id} word`;
  }
}
