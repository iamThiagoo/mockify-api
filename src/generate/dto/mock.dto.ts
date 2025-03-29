import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsObject,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { FakerLocale } from '../enums/faker-locale.enum';
import { ApiProperty } from '@nestjs/swagger';

export class MockField {
  @ApiProperty({
    example: 'firstName',
    description: 'Type of mock data to generate',
  })
  @IsString()
  type: string;

  @ApiProperty({
    example: { min: 1, max: 10 },
    description: 'Parameters for the mock data generation',
  })
  @IsOptional()
  params?: any;
}

export class MockDto {
  @ApiProperty({
    example: FakerLocale.EN_US,
    description: 'Locale for generating fake data',
  })
  @IsEnum(FakerLocale)
  locale?: FakerLocale;

  @ApiProperty({
    example: true,
    description: 'Whether to show validation errors',
  })
  @IsBoolean()
  show_errors?: boolean;

  @ApiProperty({ example: 1, description: 'Number of records to generate' })
  @IsInt()
  @IsPositive()
  repeat?: number;

  @ApiProperty({
    example: {
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
    description: 'Object containing field definitions for mock data generation',
  })
  @IsObject()
  mock: Record<string, MockField>;
}
