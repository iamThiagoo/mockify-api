# Mockify API

Mockify is a modern mock data generation API that helps developers create realistic test data with minimal effort. Whether you're building a prototype, writing tests, or need sample data for your application, Mockify has you covered.

## Summary
- [✨ Key Features](#key-features)
- [🚀 Quick Start](#-quick-start)
- [📚 Examples](#examples)
  - [Basic Usage](#basic-usage)
- [🔧 Supported Types](#supported-types)
  - [Person](#person)
  - [Contact](#contact)
  - [Address](#address)
  - [Company](#company)
  - [Internet](#internet)
  - [Commerce](#commerce)
  - [Date and Time](#date-and-time)
  - [Color](#color)
  - [File and System](#file-and-system)
- [🤝 Contributing](#contributing)
- [📜 License](#license)

## ✨ Key Features

- **Simple API** - Generate data with just a few lines of code
- **Rich Types** - 50+ built-in data types across 10+ categories
- **Smart Schema** - Define complex data structures with ease
- **Type Safety** - Full TypeScript support with type inference
- **Consistency** - Deterministic output with seeding support
- **Extensible** - Create custom types and formatters

## 🚀 Quick Start

To run the application using Docker Compose, follow these steps:

1. Clone the repository
2. Copy the environment file:
```bash
copy .env-example .env
```
3. Start the application:
```bash
docker-compose up -d
```
4. The API will be available at http://localhost:3000 (or whatever port you configured in your .env file).
5. To stop the application:
```bash
docker-compose down
```

## 📚 Examples

### Basic Usage

Generate a simple user profile:

```json
POST /api/v1/generate
Content-Type: application/json

{
  "locale": "en_US",
  "show_errors": true,
  "repeat": 1,
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

## 🔧 Supported Types

### Person
| Field Name | Description |
|------------|-------------|
| firstName | Generates a random first name |
| middleName | Generates a random middle name |
| lastName | Generates a random last name |
| fullName | Generates a complete full name |
| gender | Generates a random gender |
| bio | Generates a random biography |
| avatar | Generates a random avatar image URL |
| jobTitle | Generates a random job title |
| jobDescriptor | Generates a random job descriptor |
| jobArea | Generates a random job area |

### Contact
| Field Name | Description |
|------------|-------------|
| email | Generates a random email address |
| phone / phoneNumber | Generates a random phone number |
| website | Generates a random website URL |
| password | Generates a random password |

### Address
| Field Name | Description |
|------------|-------------|
| address / streetAddress | Generates a complete street address |
| street / streetName | Generates a random street name |
| buildingNumber | Generates a random building number |
| city | Generates a random city name |
| state | Generates a random state name |
| country | Generates a random country name |
| zipCode / postalCode | Generates a random postal code |
| latitude | Generates a random latitude coordinate |
| longitude | Generates a random longitude coordinate |

### Company
| Field Name | Description |
|------------|-------------|
| company / companyName | Generates a random company name |
| catchPhrase | Generates a random company catch phrase |

### Internet
| Field Name | Description |
|------------|-------------|
| ip | Generates a random IPv4 address |
| ipv6 | Generates a random IPv6 address |
| domain | Generates a random domain name |
| url | Generates a random URL |
| userAgent | Generates a random user agent string |

### Commerce
| Field Name | Description |
|------------|-------------|
| product / productName | Generates a random product name |
| price | Generates a random price |
| department | Generates a random department name |
| description | Generates a random product description |

### Date and Time
| Field Name | Description |
|------------|-------------|
| date / pastDate | Generates a random past date |
| futureDate | Generates a random future date |
| recentDate | Generates a random recent date |
| month | Generates a random month |
| weekday | Generates a random weekday |

### Color
| Field Name | Description |
|------------|-------------|
| color | Generates a random color name |
| hex | Generates a random hex color code |
| rgb | Generates a random RGB color value |
| hsl | Generates a random HSL color value |

### File and System
| Field Name | Description |
|------------|-------------|
| fileName | Generates a random file name |
| filePath | Generates a random file path |
| fileExt | Generates a random file extension |
| mimeType | Generates a random MIME type |

## 🤝 Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## 📜 License

Mockify is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.