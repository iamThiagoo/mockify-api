import { FakerTypes } from '../enums/faker-types.enum';

export const FakerFieldMappings: Record<string, FakerTypes> = {
  firstName: FakerTypes.FirstName,
  middleName: FakerTypes.MiddleName,
  lastName: FakerTypes.LastName,
  gender: FakerTypes.Gender,
  bio: FakerTypes.Bio,
  age: FakerTypes.Age,
  email: FakerTypes.InternetEmail,
  phone: FakerTypes.PhoneNumber,
  city: FakerTypes.AddressCity,
  country: FakerTypes.AddressCountry,
};
