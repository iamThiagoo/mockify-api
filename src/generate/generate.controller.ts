import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GenerateService } from './generate.service';
import { MockDto } from './dto/mock.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Generate')
@Controller({ path: 'generate', version: '1' })
export class GenerateController {
  constructor(private readonly service: GenerateService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  @ApiOperation({
    summary: 'The main endpoint',
    description: 'Returns a mock data based on the provided schema',
  })
  @ApiResponse({
    status: 201,
    description: 'Successfully generated mock data',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({
    type: MockDto,
    description: 'Schema definition for mock data generation',
    examples: {
      'Simple Example 1': {
        value: {
          locale: 'pt_BR',
          show_errors: true,
          repeat: 1,
          mock: {
            name: {
              type: 'firstName',
            },
            middlename: {
              type: 'middleName',
            },
            lastname: {
              type: 'lastName',
            },
          },
        },
      },
    },
  })
  mockGenerate(@Body() body: MockDto) {
    return this.service.generate(body);
  }
}
