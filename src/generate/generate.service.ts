/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { MockDto } from './dto/mock.dto';
import { FakerLocale } from './enums/faker-locale.enum';
import { allFakers, Faker } from '@faker-js/faker';
import { FakerFieldMappings } from './constants/faker-mappings';

export class GenerateService {
  generate(data: MockDto) {
    const { locale = FakerLocale.EN, repeat = 1, mock } = data;

    const response = Array.from({ length: repeat }, () => {
      const data: Record<string, any> = {};
      for (const [fieldName, params] of Object.entries(mock)) {
        data[fieldName] = this.generateData(locale, params.type);
      }
      return data;
    });

    return response;
  }

  generateData(locale: FakerLocale, type: string): string {
    try {
      const faker: Faker = allFakers[locale];
      const fakerType = FakerFieldMappings[type];
      const [category, method] = fakerType.split('.');

      if (faker[category] && typeof faker[category][method] === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return faker[category][method]();
      }

      throw new Error(`Invalid Faker type: ${type}`);
    } catch (error) {
      console.error('Error generating data: ', error);
      throw error;
    }
  }
}
