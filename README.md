# Mockify 🎭

Mockify is a modern mock data generation API that helps developers create realistic test data with minimal effort. Whether you're building a prototype, writing tests, or need sample data for your application, Mockify has you covered.

## Key Features

- **Simple API** - Generate data with just a few lines of code
- **Rich Types** - 100+ built-in data types across 15+ categories
- **Smart Schema** - Define complex data structures with ease
- **Type Safety** - Full TypeScript support with type inference
- **Consistency** - Deterministic output with seeding support
- **Performance** - Generate thousands of records in milliseconds
- **Extensible** - Create custom types and formatters

## Examples

### Basic Usage

Generate a simple user profile:

```json
POST /api/v1/generate
Content-Type: application/json

{
  "locale": "en_US",
  "show_errors": true,
  "repeat": 1,
  "single_item": true,
  "mock": {
    "first_name": {
      "type": "firstName"
    },
    "middle_name": {
      "type": "middleName"
    },
    "last_name": {
      "type": "lastName"
    },
    "email": {
      "type": "email"
    }
  }
}
```

```json
201 Created
[
  {
    "first_name": "Emmie",
    "middle_name": "Reagan",
    "last_name": "Stroman",
    "email": "Maude50@hotmail.com"
  }
]
```

## Supported Types

| Category & Type | Category & Type |
|----------------|-----------------|
| **Address** | **Internet** |
| • Zip Code | • Email |
| • City | • URL |
| • Street Address | • Domain Name |
| • Country | • IP |
| • State | • IPv6 |
| • Latitude | • User Agent |
| • Longitude | • Password |
| • Building Number | |
| • Street Name | |
| &nbsp; |
| **Commerce** | **Lorem** |
| • Product Name | • Word |
| • Price | • Words |
| • Department | • Sentence |
| • Product Description | • Sentences |
| • Product Adjective | • Paragraph |
| • Product Material | • Paragraphs |
| | • Text |
| &nbsp; |
| **Company** | **Music** |
| • Company Name | • Genre |
| • Catch Phrase | • Song Name |
| • BS | • Artist |
| • Industry | |
| • Profession | |
| &nbsp; |
| **Database** | **Person** |
| • Column | • First Name |
| • Type | • Last Name |
| • Collation | • Middle Name |
| • Engine | • Gender |
| | • Bio |
| | • Age |
| &nbsp; |
| **Date** | **Phone** |
| • Past | • Phone Number |
| • Future | • Number Format |
| • Recent | • IMEI |
| • Soon | |
| • Month | |
| • Weekday | |
| &nbsp; |
| **Finance** | **Random** |
| • Account | • UUID |
| • Account Name | • Boolean |
| • Routing Number | • Locale |
| • Credit Card Number | • Alpha |
| • Currency | • Alphanumeric |
| • Transaction Type | • Word |
| • Bitcoin Address | • Words |
| &nbsp; |
| **Git** | **Science** |
| • Branch | • Chemical Element |
| • Commit Entry | • Unit |
| • Commit Message | • Measurement |
| • Commit SHA | |
| &nbsp; |
| **Hacker** | **System** |
| • Abbreviation | • File Name |
| • Adjective | • File Path |
| • Noun | • File Extension |
| • Verb | • MIME Type |
| • Phrase | • Directory Path |
| | • Network Interface |
| &nbsp; |
| **Image** | **Time** |
| • URL | • Hour |
| • Avatar | • Minute |
| • Fashion | • Second |
| • Nature | |
| • People | |
| • Animals | |
| &nbsp; |
| **Vehicle** | **Color** |
| • Manufacturer | • Hex |
| • Model | • RGB |
| • Type | • Name |
| • Fuel | • HSL |
| • VIN | |
| • Color | |
| &nbsp; |
| **Animal** | |
| • Dog | |
| • Cat | |
| • Horse | |
| • Bird | |
| • Fish | |

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

Mockify is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.