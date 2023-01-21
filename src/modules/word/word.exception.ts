import { HttpException, HttpStatus } from '@nestjs/common';

export class WordNotFoundException extends HttpException {
  constructor(error?: string) {
    super(error ?? 'Word not found', HttpStatus.NOT_FOUND);
  }
}
