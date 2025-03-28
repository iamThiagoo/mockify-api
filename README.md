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

| Category & Type | Category & Type | Category & Type | Category & Type |
|----------------|-----------------|-----------------|-----------------|
| **Address** | **Date** | **Hacker** | **Person** |
| • Zip Code | • Past | • Abbreviation | • First Name |
| • City | • Future | • Adjective | • Last Name |
| • Street Address | • Recent | • Noun | • Middle Name |
| • Country | • Soon | • Verb | • Gender |
| • State | • Month | • Phrase | • Bio |
| • Latitude | • Weekday | | • Age |
| • Longitude | | | |
| • Building Number | | | |
| • Street Name | | | |
| | &nbsp; | | |
| **Commerce** | **Finance** | **Image** | **Phone** |
| • Product Name | • Account | • URL | • Phone Number |
| • Price | • Account Name | • Avatar | • Number Format |
| • Department | • Routing Number | • Fashion | • IMEI |
| • Product Description | • Credit Card Number | • Nature | |
| • Product Adjective | • Currency | • People | |
| • Product Material | • Transaction Type | • Animals | |
| | • Bitcoin Address | | |
| | &nbsp; | | |
| **Company** | **Git** | **Internet** | **Random** |
| • Company Name | • Branch | • Email | • UUID |
| • Catch Phrase | • Commit Entry | • URL | • Boolean |
| • BS | • Commit Message | • Domain Name | • Locale |
| • Industry | • Commit SHA | • IP | • Alpha |
| • Profession | | • IPv6 | • Alphanumeric |
| | | • User Agent | • Word |
| | | • Password | • Words |
| | &nbsp; | | |
| **Database** | **Lorem** | **Music** | **Science** |
| • Column | • Word | • Genre | • Chemical Element |
| • Type | • Words | • Song Name | • Unit |
| • Collation | • Sentence | • Artist | • Measurement |
| • Engine | • Sentences | | |
| | • Paragraph | | |
| | • Paragraphs | | |
| | • Text | | |
| | &nbsp; | | |
| **System** | **Time** | **Vehicle** | **Color** |
| • File Name | • Hour | • Manufacturer | • Hex |
| • File Path | • Minute | • Model | • RGB |
| • File Extension | • Second | • Type | • Name |
| • MIME Type | | • Fuel | • HSL |
| • Directory Path | | • VIN | |
| • Network Interface | | • Color | |
| | &nbsp; | | |
| **Animal** | | | |
| • Dog | | | |
| • Cat | | | |
| • Horse | | | |
| • Bird | | | |
| • Fish | | | |

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

Mockify is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.