/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { MockDto } from './dto/mock.dto';
import { FakerLocale } from './enums/faker-locale.enum';
import { allFakers, Faker } from '@faker-js/faker';
import { FakerFieldMappings } from './constants/faker-mappings';
import { ErrorsEnum } from './enums/errors.enum';
export class GenerateService {
  generate(data: MockDto) {
    const {
      locale = FakerLocale.EN,
      repeat = 1,
      mock,
      show_errors = false,
    } = data;

    const response = Array.from({ length: repeat }, () => {
      const data: Record<string, any> = {};
      for (const [fieldName, params] of Object.entries(mock)) {
        const result = this.generateData(locale, params.type);

        if (result === (ErrorsEnum.INVALID_TYPE as string)) {
          if (!show_errors) continue;
          if (!data['errors']) data['errors'] = {};
          data['errors'][fieldName] = `'${params.type}' is not a valid type`;
        } else {
          data[fieldName] = result;
        }
      }
      return data;
    });

    return response;
  }

  generateData(locale: FakerLocale, type: string): string {
    try {
      const faker: Faker = allFakers[locale];
      const fakerType = FakerFieldMappings[type];

      if (!fakerType) {
        return ErrorsEnum.INVALID_TYPE;
      }

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
