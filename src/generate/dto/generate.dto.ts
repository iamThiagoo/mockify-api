import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';

export class GenerateDto {
  @IsString()
  locale?: string;

  @IsNumber()
  repeat?: number;

  @IsBoolean()
  show_errors?: boolean;

  @IsArray()
  mock: any[];
}
