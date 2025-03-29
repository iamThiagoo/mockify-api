import { FakerTypes } from '../enums/faker-types.enum';

export const FakerFieldMappings: Record<string, FakerTypes> = {
  // Person
  firstName: FakerTypes.FirstName,
  middleName: FakerTypes.MiddleName,
  lastName: FakerTypes.LastName,
  fullName: FakerTypes.FullName,
  gender: FakerTypes.Gender,
  bio: FakerTypes.Bio,
  avatar: FakerTypes.ImageAvatar,
  jobTitle: FakerTypes.JobTitle,
  jobDescriptor: FakerTypes.JobDescriptor,
  jobArea: FakerTypes.JobArea,

  // Contact
  email: FakerTypes.InternetEmail,
  phone: FakerTypes.PhoneNumber,
  phoneNumber: FakerTypes.PhoneNumber,
  website: FakerTypes.InternetUrl,
  password: FakerTypes.InternetPassword,

  // Address
  address: FakerTypes.AddressStreetAddress,
  street: FakerTypes.AddressStreetName,
  streetName: FakerTypes.AddressStreetName,
  streetAddress: FakerTypes.AddressStreetAddress,
  buildingNumber: FakerTypes.AddressBuildingNumber,
  city: FakerTypes.AddressCity,
  state: FakerTypes.AddressState,
  country: FakerTypes.AddressCountry,
  zipCode: FakerTypes.AddressZipCode,
  postalCode: FakerTypes.AddressZipCode,
  latitude: FakerTypes.AddressLatitude,
  longitude: FakerTypes.AddressLongitude,

  // Company
  company: FakerTypes.CompanyName,
  companyName: FakerTypes.CompanyName,
  catchPhrase: FakerTypes.CompanyCatchPhrase,

  // Internet
  ip: FakerTypes.InternetIp,
  ipv6: FakerTypes.InternetIpv6,
  domain: FakerTypes.InternetDomainName,
  url: FakerTypes.InternetUrl,
  userAgent: FakerTypes.InternetUserAgent,

  // Commerce
  product: FakerTypes.CommerceProductName,
  productName: FakerTypes.CommerceProductName,
  price: FakerTypes.CommercePrice,
  department: FakerTypes.CommerceDepartment,
  description: FakerTypes.CommerceProductDescription,

  // IDs and Random
  id: FakerTypes.RandomUuid, //
  uuid: FakerTypes.RandomUuid, //
  boolean: FakerTypes.RandomBoolean, //

  // Date and Time
  date: FakerTypes.DatePast,
  futureDate: FakerTypes.DateFuture,
  pastDate: FakerTypes.DatePast,
  recentDate: FakerTypes.DateRecent,
  month: FakerTypes.DateMonth,
  weekday: FakerTypes.DateWeekday,

  // Color
  color: FakerTypes.ColorName,
  hex: FakerTypes.ColorHex,
  rgb: FakerTypes.ColorRgb,
  hsl: FakerTypes.ColorHsl,

  // File and System
  fileName: FakerTypes.SystemFileName,
  filePath: FakerTypes.SystemFilePath,
  fileExt: FakerTypes.SystemFileExtension,
  mimeType: FakerTypes.SystemMimeType,
};
