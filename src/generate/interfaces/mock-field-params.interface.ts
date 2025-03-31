import { FakerLocale } from '../enums/faker-locale.enum';

export interface IMockFieldParams {
  min?: number;
  max?: number;
  locale?: FakerLocale;
  pattern?: string;
  prefix?: string;
  suffix?: string;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  options?: string[];
}
