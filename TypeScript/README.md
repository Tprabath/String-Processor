# String Processor

<p align="center">
  <img src="https://img.shields.io/npm/v/@prabhath2007/string-processor.svg?style=plastic" alt="npm version"/>
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=plastic" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Dependencies-0-lightgrey.svg?style=plastic" alt="Zero Dependencies"/>
  <img src="https://img.shields.io/github/stars/Tprabath/String-Processor.svg?style=plastic" alt="GitHub stars"/>
</p>


A light-weight library for processing templates(or any strings) by replacing placeholders with dynamic data values. This library provides a flexible and type-safe way to inject data into template strings.

## Features

- **Type-Safe**: Full TypeScript support with generics for placeholder and value types
- **Flexible Placeholder Format**: Support for custom placeholder wrapper formats
- **Chainable API**: Fluent interface for easy method chaining
- **Regex-Based Replacement**: Efficient pattern matching and replacement
- **Data Management**: Built-in `TemplateDataMap` for managing placeholder-value pairs

## Installation

```bash
npm i @prabhath2007/string-processor
```

## Basic Usage

### 1. Simple Template Processing

```typescript
import { TemplateProcessor } from './src/index';

// Create a template with default placeholders ({{placeholder}})
const processor = new TemplateProcessor<string, string>(
    "Hello {{name}}, welcome to {{place}}!"
);

// Add data
processor
    .putData('name', 'John')
    .putData('place', 'String Processor');

// Get the processed result
const result = processor.getFormatedTemplate();
console.log(result); // "Hello John, welcome to String Processor!"
```

### 2. Type-Safe Template Processing

```typescript
import { TemplateProcessor } from './src/index';

interface UserData {
    name: string;
    age: number;
}

// Use custom types for placeholders and values
const processor = new TemplateProcessor<string, UserData>(
    "User: {{user}}"
);

const userData: UserData = { name: 'Alice', age: 30 };
processor.putData('user', userData);

const result = processor.getFormatedTemplate();
console.log(result); // "User: [object Object]"
```

### 3. Multiple Placeholders

```typescript
import { TemplateProcessor } from './src/index';

const template = `
    Name: {{name}}
    Email: {{email}}
    Phone: {{phone}}
`;

const processor = new TemplateProcessor<string, string>(template);

processor
    .putData('name', 'Bob Smith')
    .putData('email', 'bob@example.com')
    .putData('phone', '555-1234');

console.log(processor.getFormatedTemplate());
// Output:
//     Name: Bob Smith
//     Email: bob@example.com
//     Phone: 555-1234
```

## API Reference

### TemplateProcessor

#### Constructor

```typescript
constructor(
    template: string,
    wrapperFormat_value?: PLACEHOLDERS_VALUE,
    wrapperFormat?: PLACEHOLDERS
)
```

**Parameters:**
- `template` - The template string containing placeholders
- `wrapperFormat_value` - (Optional) The placeholder value format (default: `PLACEHOLDERS_VALUE.DEFAULT`)
- `wrapperFormat` - (Optional) The placeholder wrapper format (default: `PLACEHOLDERS.DEFAULT`)

#### Methods

##### `putData(placeholder: K_Type, value: V_Type): this`
Adds a placeholder-value pair to the template data map.

```typescript
processor.putData('name', 'John');
```

##### `setTemplateData(templateMap: TemplateDataMap<K_Type, V_Type>): this`
Sets the entire template data map at once.

```typescript
const dataMap = new TemplateDataMap<string, string>();
dataMap.put('name', 'John');
processor.setTemplateData(dataMap);
```

##### `getFormatedTemplate(): String`
Processes the template and returns the result with all placeholders replaced.

```typescript
const result = processor.getFormatedTemplate();
```

##### `reInitData(): this`
Clears all the template data. Useful for reusing the processor.

```typescript
processor.reInitData();
processor.putData('name', 'Jane');
```

### TemplateDataMap

Internal class for managing placeholder-value pairs.

#### Methods

##### `put(placeholder: K_Type, data: V_Type): this`
Adds a placeholder-value pair.

```typescript
const dataMap = new TemplateDataMap<string, string>();
dataMap.put('username', 'alice');
```

##### `get(): { formatedPlaceholders: RegExp[], values: V_Type[] }`
Returns the formatted placeholders and values.

```typescript
const { formatedPlaceholders, values } = dataMap.get();
```

##### `formatToRegex(placeholderFormat: PLACEHOLDERS, placeholderFormat_Value: PLACEHOLDERS_VALUE): void`
Converts placeholders to regex patterns for replacement.

##### `reInit(): void`
Clears all stored data.

##### `getSize(): number`
Returns the number of placeholder-value pairs.

## Enums

### PLACEHOLDERS

Defines the placeholder wrapper format.

```typescript
export enum PLACEHOLDERS {
    DEFAULT = `\\{\\{${PLACEHOLDERS_VALUE.DEFAULT}\\}\\}`  // {{placeholder}}
}
```

### PLACEHOLDERS_VALUE

Defines the placeholder value pattern.

```typescript
export enum PLACEHOLDERS_VALUE {
    DEFAULT = 'placeholder'
}
```

## Advanced Usage

### Custom Placeholder Formats

You can create custom placeholder formats by using different `PLACEHOLDERS` and `PLACEHOLDERS_VALUE` enums:

```typescript
import { TemplateProcessor, PLACEHOLDERS, PLACEHOLDERS_VALUE } from './src/index';

// Using default format: {{placeholder}}
const processor = new TemplateProcessor<string, string>(
    "Hello {{name}}!",
    PLACEHOLDERS_VALUE.DEFAULT,
    PLACEHOLDERS.DEFAULT
);

processor.putData('name', 'World');
console.log(processor.getFormatedTemplate()); // "Hello World!"
```

### Reusing the Processor

```typescript
const processor = new TemplateProcessor<string, string>(
    "Hello {{name}}, your email is {{email}}!"
);

// First use
processor
    .putData('name', 'Alice')
    .putData('email', 'alice@example.com');

console.log(processor.getFormatedTemplate());
// "Hello Alice, your email is alice@example.com!"

// Reuse the processor with new data
processor.reInitData();
processor
    .putData('name', 'Bob')
    .putData('email', 'bob@example.com');

console.log(processor.getFormatedTemplate());
// "Hello Bob, your email is bob@example.com!"
```

## Example Use Cases

- **Email Templates**: Generate personalized emails with dynamic content
- **HTML Generation**: Create HTML documents with variable content
- **Configuration Files**: Generate config files with environment-specific values
- **Report Generation**: Create reports with dynamic data
- **String Interpolation**: Safe and flexible string templating

## Project Structure

```
String Processor/
├── TypeScript/
│   ├── src/
│   │   ├── index.ts              # Main exports
│   │   ├── classes/
│   │   │   ├── TemplateProcessor.ts
│   │   │   └── TemplateDataMap.ts
│   │   └── enums/
│   │       ├── Placeholders.ts
│   │       └── PlaceholderValues.ts
│   └── tsconfig.json
└── README.md                      # This file
```

## License


## Contributing

