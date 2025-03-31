import { MockDto } from './dto/mock.dto';
import { FakerLocale } from './enums/faker-locale.enum';
import { allFakers, Faker } from '@faker-js/faker';
import { FakerFieldMappings } from './constants/faker-mappings';
import { ErrorsEnum } from './enums/errors.enum';
import { IMockFieldParams } from './interfaces/mock-field-params.interface';
export class GenerateService {
  generate(data: MockDto): Record<string, any>[] {
    const {
      locale = FakerLocale.EN,
      repeat = 1,
      mock,
      show_errors = false,
    } = data;

    return Array.from({ length: repeat }, () => {
      const result: Record<string, any> = {};
      const errors: Record<string, string> = {};

      for (const [fieldName, fieldConfig] of Object.entries(mock)) {
        try {
          const value = this.generateData(
            locale,
            fieldConfig.type,
            (fieldConfig.params as IMockFieldParams) || {},
          );

          if (value === ErrorsEnum.INVALID_TYPE) {
            if (show_errors) {
              errors[fieldName] = `'${fieldConfig.type}' is not a valid type`;
            }
          } else {
            result[fieldName] = value;
          }
        } catch (error) {
          if (show_errors) {
            errors[fieldName] =
              error instanceof Error ? error.message : 'Unknown error occurred';
          }
        }
      }

      if (Object.keys(errors).length > 0 && show_errors) {
        result.errors = errors;
      }

      return result;
    });
  }

  generateData(
    locale: FakerLocale,
    type: string,
    params: IMockFieldParams,
  ): string | number {
    try {
      const faker: Faker = allFakers[params.locale || locale];
      const fakerType = FakerFieldMappings[type];

      if (!fakerType) {
        return ErrorsEnum.INVALID_TYPE;
      }

      const methodMatch = fakerType.match(/^(\w+)\.(\w+)(?:\((.*)\))?$/);
      if (!methodMatch) {
        return ErrorsEnum.INVALID_TYPE;
      }

      const [, category, methodName, args = ''] = methodMatch;
      const fakerCategory = faker[category];

      if (!fakerCategory) {
        throw new Error(`Invalid Faker category: ${category}`);
      }

      const method = fakerCategory[methodName];
      if (typeof method !== 'function') {
        throw new Error(`Invalid Faker method: ${methodName}`);
      }

      const parsedArgs = args ? this.parseArgs(args) : [];
      let result: any = method.apply(fakerCategory, parsedArgs);

      if (params.options && params.options?.length > 0) {
        result = faker.helpers.arrayElement(params.options);
      } else {
        if (params.pattern) {
          result = faker.helpers.fake(params.pattern);
        }

        if (
          typeof result === 'number' ||
          (params.min !== undefined && params.max !== undefined)
        ) {
          result = this.applyNumericParams(result, params, faker);
        }
        result = this.applyStringParams(String(result), params);
      }

      return result;
    } catch (error) {
      console.error('Error generating data:', error);
      throw error;
    }
  }

  private parseArgs(argsString: string): any[] {
    try {
      return JSON.parse(`[${argsString}]`);
    } catch {
      return [];
    }
  }

  private applyNumericParams(
    value: string | number,
    params: IMockFieldParams,
    faker: Faker,
  ): number | string {
    if (params.min !== undefined || params.max !== undefined) {
      return faker.number.int({
        min: params.min ?? undefined,
        max: params.max ?? undefined,
      });
    }

    return value;
  }

  private applyStringParams(value: string, params: IMockFieldParams): string {
    let result = value;

    if (params.prefix) result = params.prefix + result;
    if (params.suffix) result = result + params.suffix;

    if (params.uppercase) {
      result = result.toUpperCase();
    } else if (params.lowercase) {
      result = result.toLowerCase();
    } else if (params.capitalize) {
      result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
    }

    return result;
  }
}
