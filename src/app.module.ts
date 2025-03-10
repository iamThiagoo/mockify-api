import { Module } from '@nestjs/common';
import { GenerateModule } from './generate/generate.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    GenerateModule,
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60,
          limit: 5,
        },
      ],
    }),
  ],
})
export class AppModule {}
