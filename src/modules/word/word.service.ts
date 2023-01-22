import { Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { PrismaService } from '../prisma/prisma.service';
import { FilterWordDto } from './dto/filter-word.dto';
import { WordWhereInput } from 'prisma';

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

  async findAll(filters: FilterWordDto) {
    const where: WordWhereInput = {
      word: {
        contains: filters.word,
      },
    };
    const words = this.prismaService.word.findMany({
      where,
      skip: filters.offset,
      take: filters.limit,
    });

    const count = this.prismaService.word.count({ where });

    return Promise.all([words, count]);
  }

  async findOne(id: number) {
    return this.prismaService.word.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    return `This action updates a #${id} word`;
  }

  remove(id: number) {
    return `This action removes a #${id} word`;
  }
}
