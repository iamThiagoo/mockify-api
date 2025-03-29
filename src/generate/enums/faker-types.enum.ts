export enum FakerTypes {
  // Address
  AddressZipCode = 'address.zipCode',
  AddressCity = 'address.city',
  AddressStreetAddress = 'address.streetAddress',
  AddressCountry = 'address.country',
  AddressState = 'address.state',
  AddressLatitude = 'address.latitude',
  AddressLongitude = 'address.longitude',
  AddressBuildingNumber = 'address.buildingNumber',
  AddressStreetName = 'location.streetAddress',

  // Commerce
  CommerceProductName = 'commerce.productName',
  CommercePrice = 'commerce.price',
  CommerceDepartment = 'commerce.department',
  CommerceProductDescription = 'commerce.productDescription',
  CommerceProductAdjective = 'commerce.productAdjective',
  CommerceProductMaterial = 'commerce.productMaterial',

  // Company
  CompanyName = 'company.name',
  CompanyCatchPhrase = 'company.catchPhrase',

  // Database
  DatabaseColumn = 'database.column',
  DatabaseType = 'database.type',
  DatabaseCollation = 'database.collation',
  DatabaseEngine = 'database.engine',

  // Date
  DatePast = 'date.past',
  DateFuture = 'date.future',
  DateRecent = 'date.recent',
  DateSoon = 'date.soon',
  DateMonth = 'date.month',
  DateWeekday = 'date.weekday',

  // Finance
  FinanceAccount = 'finance.account',
  FinanceAccountName = 'finance.accountName',
  FinanceRoutingNumber = 'finance.routingNumber',
  FinanceCreditCardNumber = 'finance.creditCardNumber',
  FinanceCurrency = 'finance.currency',
  FinanceTransactionType = 'finance.transactionType',
  FinanceBitcoinAddress = 'finance.bitcoinAddress',

  // Git
  GitBranch = 'git.branch',
  GitCommitEntry = 'git.commitEntry',
  GitCommitMessage = 'git.commitMessage',
  GitCommitSha = 'git.commitSha',

  // Hacker
  HackerAbbreviation = 'hacker.abbreviation',
  HackerAdjective = 'hacker.adjective',
  HackerNoun = 'hacker.noun',
  HackerVerb = 'hacker.verb',
  HackerPhrase = 'hacker.phrase',

  // Image
  ImageUrl = 'image.imageUrl',
  ImageAvatar = 'image.avatar',
  ImageFashion = 'image.fashion',
  ImageNature = 'image.nature',
  ImagePeople = 'image.people',
  ImageAnimals = 'image.animals',

  // Internet
  InternetEmail = 'internet.email',
  InternetUrl = 'internet.url',
  InternetDomainName = 'internet.domainName',
  InternetIp = 'internet.ip',
  InternetIpv6 = 'internet.ipv6',
  InternetUserAgent = 'internet.userAgent',
  InternetPassword = 'internet.password',

  // Lorem
  LoremWord = 'lorem.word',
  LoremWords = 'lorem.words',
  LoremSentence = 'lorem.sentence',
  LoremSentences = 'lorem.sentences',
  LoremParagraph = 'lorem.paragraph',
  LoremParagraphs = 'lorem.paragraphs',
  LoremText = 'lorem.text',

  // Music
  MusicGenre = 'music.genre',
  MusicSongName = 'music.songName',
  MusicArtist = 'music.artist',

  // Person
  FirstName = 'person.firstName',
  LastName = 'person.lastName',
  FullName = 'person.fullName',
  MiddleName = 'person.middleName',
  Gender = 'person.gender',
  Bio = 'person.bio',
  JobTitle = 'person.jobTitle',
  JobDescriptor = 'person.jobDescriptor',
  JobArea = 'person.jobArea',

  // Phone
  PhoneNumber = 'phone.number',
  PhoneNumberFormat = 'phone.phoneNumberFormat',
  PhoneImei = 'phone.imei',

  // Random
  RandomUuid = 'random.uuid',
  RandomBoolean = 'random.boolean',
  RandomLocale = 'random.locale',
  RandomAlpha = 'random.alpha',
  RandomAlphaNumeric = 'random.alphaNumeric',
  RandomWord = 'random.word',
  RandomWords = 'random.words',

  // Science
  ScienceChemicalElement = 'science.chemicalElement',
  ScienceUnit = 'science.unit',
  ScienceMeasurement = 'science.measurement',

  // System
  SystemFileName = 'system.fileName',
  SystemFilePath = 'system.filePath',
  SystemFileExtension = 'system.fileExt',
  SystemMimeType = 'system.mimeType',
  SystemDirectoryPath = 'system.directoryPath',
  SystemNetworkInterface = 'system.networkInterface',

  // Time
  TimeHour = 'time.hour',
  TimeMinute = 'time.minute',
  TimeSecond = 'time.second',

  // Vehicle
  VehicleManufacturer = 'vehicle.manufacturer',
  VehicleModel = 'vehicle.model',
  VehicleType = 'vehicle.type',
  VehicleFuel = 'vehicle.fuel',
  VehicleVin = 'vehicle.vin',
  VehicleColor = 'vehicle.color',

  // Animal
  AnimalDog = 'animal.dog',
  AnimalCat = 'animal.cat',
  AnimalHorse = 'animal.horse',
  AnimalBird = 'animal.bird',
  AnimalFish = 'animal.fish',

  // Color
  ColorHex = `color.rgb({ format: 'hex', casing: 'lower' })`,
  ColorRgb = 'color.rgb',
  ColorName = 'color.human',
  ColorHsl = 'color.hsl',
}
