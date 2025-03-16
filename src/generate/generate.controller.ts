import { Body, Controller, Post } from '@nestjs/common';
import { GenerateService } from './generate.service';
import { MockDto } from './dto/mock.dto';

@Controller({ path: 'generate', version: '1' })
export class GenerateController {
  constructor(private readonly service: GenerateService) {}

  @Post()
  mockGenerate(@Body() body: MockDto) {
    return this.service.generate(body);
  }
}
