# Mockify API 🎭

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

| Category & Type | Category & Type | Category & Type | Category & Type | Category & Type |
|----------------|-----------------|-----------------|-----------------|-----------------|
| **Address** | **Company** | **Git** | **Lorem** | **Science** |
| • Zip Code | • Company Name | • Branch | • Word | • Chemical Element |
| • City | • Catch Phrase | • Commit Entry | • Words | • Unit |
| • Street Address | • BS | • Commit Message | • Sentence | • Measurement |
| • Country | • Industry | • Commit SHA | • Sentences | |
| • State | • Profession | | • Paragraph | |
| • Latitude | | | • Paragraphs | |
| • Longitude | | | • Text | |
| • Building Number | | | | |
| • Street Name | | | | |
| | &nbsp; | | | |
| **Commerce** | **Database** | **Hacker** | **Music** | **System** |
| • Product Name | • Column | • Abbreviation | • Genre | • File Name |
| • Price | • Type | • Adjective | • Song Name | • File Path |
| • Department | • Collation | • Noun | • Artist | • File Extension |
| • Product Description | • Engine | • Verb | | • MIME Type |
| • Product Adjective | | • Phrase | | • Directory Path |
| • Product Material | | | | • Network Interface |
| | &nbsp; | | | |
| **Date** | **Finance** | **Image** | **Person** | **Time** |
| • Past | • Account | • URL | • First Name | • Hour |
| • Future | • Account Name | • Avatar | • Last Name | • Minute |
| • Recent | • Routing Number | • Fashion | • Middle Name | • Second |
| • Soon | • Credit Card Number | • Nature | • Gender | |
| • Month | • Currency | • People | • Bio | |
| • Weekday | • Transaction Type | • Animals | • Age | |
| | • Bitcoin Address | | | |
| | &nbsp; | | | |
| **Internet** | **Phone** | **Random** | **Vehicle** | **Color** |
| • Email | • Phone Number | • UUID | • Manufacturer | • Hex |
| • URL | • Number Format | • Boolean | • Model | • RGB |
| • Domain Name | • IMEI | • Locale | • Type | • Name |
| • IP | | • Alpha | • Fuel | • HSL |
| • IPv6 | | • Alphanumeric | • VIN | |
| • User Agent | | • Word | • Color | |
| • Password | | • Words | | |
| | &nbsp; | | | |
| **Animal** | | | | |
| • Dog | | | | |
| • Cat | | | | |
| • Horse | | | | |
| • Bird | | | | |
| • Fish | | | | |

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

Mockify is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.