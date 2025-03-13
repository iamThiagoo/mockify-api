import {
  IsBoolean,
  IsInt,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class MockField {
  @ValidateNested({ each: true })
  @Type(() => MockField)
  fields: Record<string, MockField>;

  @IsString()
  type: string;

  @IsObject()
  params?: MockField;
}

export class GenerateDto {
  @IsString()
  locale?: string;

  @IsBoolean()
  show_errors?: boolean;

  @IsInt()
  repeat: number;

  @IsBoolean()
  single_item: boolean;

  @ValidateNested()
  @Type(() => MockField)
  mock: MockField;
}
