import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Ping')
@Controller('ping')
export class PingController {
  @Get()
  @ApiOperation({
    summary: 'Check if the API is running',
    description:
      'Returns a simple response to check if the API is running and healthy.',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  getHello(): string {
    return 'Pong!';
  }
}
