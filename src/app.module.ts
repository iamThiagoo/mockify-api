import { Module } from '@nestjs/common';
import { GenerateModule } from './generate/generate.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [
    GenerateModule,
    PingModule,
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
