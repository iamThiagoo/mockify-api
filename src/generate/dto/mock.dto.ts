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

export class MockField {
  @IsString()
  type: string;

  @IsOptional()
  params?: any;
}

export class MockDto {
  @IsEnum(FakerLocale)
  locale?: FakerLocale;

  @IsBoolean()
  show_errors?: boolean;

  @IsInt()
  @IsPositive()
  repeat?: number;

  @IsObject()
  mock: Record<string, MockField>;
}
