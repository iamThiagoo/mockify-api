import { Controller, Post } from '@nestjs/common';
import { GenerateService } from './generate.service';

@Controller({ path: 'generate', version: '1' })
export class GenerateController {
  private readonly service: GenerateService;

  @Post()
  mockGenerate() {
    return this.service.mockGenerate();
  }
}
