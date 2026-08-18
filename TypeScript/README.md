# String Processor

<p align="center">
  <img src="https://img.shields.io/npm/v/@prabhath2007/string-processor.svg?style=plastic" alt="npm version"/>
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=plastic" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Dependencies-0-lightgrey.svg?style=plastic" alt="Zero Dependencies"/>
  <img src="https://img.shields.io/github/stars/Tprabath/String-Processor.svg?style=plastic" alt="GitHub stars"/>
</p>

A lightweight TypeScript library for replacing placeholders in templates and text strings with dynamic values. It is designed to be simple, flexible, and type-safe while remaining dependency-free.

## Features

- **Type-safe generics** for placeholder keys and values
- **Flexible placeholder patterns** with enum-driven wrapper definitions
- **Chainable API** for fluent template setup
- **Regex-based replacement** for efficient processing
- **Built-in data map management** with `TemplateDataMap`
- **Template reset and reuse** through `reInitData()`
- **Custom wrapper switching** via `switchPlaceholderWrapper()`
- **Validation safeguards** to avoid empty placeholder/data entries
- **Zero external dependencies**

## Installation

```bash
npm i @prabhath2007/string-processor
```

## Quick Start

```typescript
import { TemplateProcessor } from '@prabhath2007/string-processor';

const processor = new TemplateProcessor<string, string>(
  'Hello {{name}}, welcome to {{place}}!'
);

processor
  .putData('name', 'John')
  .putData('place', 'String Processor');

console.log(processor.getFormatedTemplate());
// Hello John, welcome to String Processor!
```

## Advanced Examples

### 1. Reusing a processor

```typescript
const processor = new TemplateProcessor<string, string>(
  'Hello {{name}}, your email is {{email}}!'
);

processor
  .putData('name', 'Alice')
  .putData('email', 'alice@example.com');

console.log(processor.getFormatedTemplate());

processor.reInitData();
processor
  .putData('name', 'Bob')
  .putData('email', 'bob@example.com');

console.log(processor.getFormatedTemplate());
```

### 2. Switching placeholder style at runtime

```typescript
import { TemplateDataMap, TemplateProcessor, PLACEHOLDERS, PLACEHOLDERS_VALUE } from '@prabhath2007/string-processor';

const template = `value 01 : {{value_1}} 
value 02 : {{value_2}} 
value 03 : {{value_3}}

value 04 : %%value04%%
`;

const data_map = new TemplateDataMap<string, number>();

data_map.put('value_1', 10);
data_map.put('value_2', 20);
data_map.put('value_3', 30);

const template_processor = new TemplateProcessor(
  template,
  PLACEHOLDERS_VALUE.DEFAULT,
  PLACEHOLDERS.DEFAULT
);

template_processor.setTemplateData(data_map);

console.log(template_processor.getFormatedTemplate());

template_processor.putData('value04', 100);
console.log(template_processor.getFormatedTemplate());

template_processor.switchPlaceholderWrapper(PLACEHOLDERS.PERCENT_SIGN);
console.log(template_processor.getFormatedTemplate());
```

Example output:

```text
value 01 : 10 
value 02 : 20 
value 03 : 30

value 04 : %%value04%%


value 01 : 10 
value 02 : 20 
value 03 : 30

value 04 : %%value04%%


value 01 : {{value_1}} 
value 02 : {{value_2}} 
value 03 : {{value_3}}

value 04 : 100
```
Conclusion:

- The template initially uses the default `{{...}}` format.
- Calling `putData('value04', 100)` adds a new value, but it is still not rendered because the current wrapper format is still `PLACEHOLDERS.DEFAULT`.
- After switching to `PLACEHOLDERS.PERCENT_SIGN`, the processor starts matching `%%value04%%` and replaces it with the new value.
- This shows that `switchPlaceholderWrapper()` changes the active placeholder style at runtime without recreating the processor.

### 3. Constructor parameter example

```typescript
import { TemplateDataMap, TemplateProcessor, PLACEHOLDERS, PLACEHOLDERS_VALUE } from '@prabhath2007/string-processor';

const template = `--------------------
value 01 : {{value_1}} 
value 02 : {{value_2}} 
value 03 : {{value_3}}

value 04 : %%value04%%
value 05 : ::value05::
`;

const data_map = new TemplateDataMap<string, number>();

data_map.put('value_1', 10);
data_map.put('value_2', 20);
data_map.put('value_3', 30);

const template_processor = new TemplateProcessor(
  template,
  PLACEHOLDERS_VALUE.DEFAULT,
  PLACEHOLDERS.COLON
);

template_processor.setTemplateData(data_map);

console.log(template_processor.getFormatedTemplate());

template_processor.putData('value05', 'Hallo world!');
console.log(template_processor.getFormatedTemplate());

template_processor.putData('value04', 100);
template_processor.switchPlaceholderWrapper(PLACEHOLDERS.DEFAULT);
console.log(template_processor.getFormatedTemplate());

template_processor.switchPlaceholderWrapper(PLACEHOLDERS.PERCENT_SIGN);
console.log(template_processor.getFormatedTemplate());
```

Example output:

```text
--------------------
value 01 : {{value_1}} 
value 02 : {{value_2}} 
value 03 : {{value_3}}

value 04 : %%value04%%
value 05 : ::value05::

--------------------
value 01 : {{value_1}} 
value 02 : {{value_2}} 
value 03 : {{value_3}}

value 04 : %%value04%%
value 05 : Hallo world!

--------------------
value 01 : 10 
value 02 : 20 
value 03 : 30

value 04 : %%value04%%
value 05 : ::value05::

--------------------
value 01 : {{value_1}} 
value 02 : {{value_2}} 
value 03 : {{value_3}}

value 04 : 100
value 05 : ::value05::
```

Conclusion:

- The constructor sets the initial placeholder format to `PLACEHOLDERS.COLON`, so `::value05::` is the active wrapper when the processor is created.
- `putData('value05', 'Hallo world!')` works immediately because `::value05::` matches the active format.
- Switching to `PLACEHOLDERS.DEFAULT` makes `{{value_1}}`, `{{value_2}}`, and `{{value_3}}` active again.
- Switching to `PLACEHOLDERS.PERCENT_SIGN` then activates `%%value04%%` replacement.
- This demonstrates that both constructor arguments and `switchPlaceholderWrapper()` control the active placeholder pattern during runtime.

### 4. Managing all values in one object

```typescript
import { TemplateDataMap, TemplateProcessor } from '@prabhath2007/string-processor';

const dataMap = new TemplateDataMap<string, string>();
dataMap.put('name', 'Jane');
dataMap.put('city', 'Colombo');

const processor = new TemplateProcessor<string, string>('{{name}} lives in {{city}}');
processor.setTemplateData(dataMap);

console.log(processor.getFormatedTemplate());
```

## API Reference

### `TemplateProcessor<K_Type, V_Type>`

#### Constructor

```typescript
constructor(
  template: string,
  wrapperFomrat_value?: PLACEHOLDERS_VALUE,
  wrapperFormat?: PLACEHOLDERS
)
```

Parameters:
- `template`: the source template string
- `wrapperFomrat_value`: placeholder value pattern, default `PLACEHOLDERS_VALUE.DEFAULT`
- `wrapperFormat`: wrapper pattern, default `PLACEHOLDERS.DEFAULT`

#### Methods

##### `putData(placeholder: K_Type, value: V_Type): this`
Adds one placeholder-value pair.

```typescript
processor.putData('name', 'John');
```

##### `setTemplateData(templateMap: TemplateDataMap<K_Type, V_Type>): this`
Sets the full data map in one call.

```typescript
const dataMap = new TemplateDataMap<string, string>();
dataMap.put('name', 'John');
processor.setTemplateData(dataMap);
```

##### `switchPlaceholderWrapper(newWrapper: PLACEHOLDERS): void`
Changes the active placeholder wrapper format.

```typescript
processor.switchPlaceholderWrapper(PLACEHOLDERS.DEFAULT);
```

##### `getFormatedTemplate(): String`
Processes the template and returns the replaced result.

```typescript
const output = processor.getFormatedTemplate();
```

##### `reInitData(): this`
Clears the stored template data so the same processor can be reused.

```typescript
processor.reInitData();
```

### `TemplateDataMap<K_Type, V_Type>`

#### Methods

##### `put(placeholder: K_Type, data: V_Type): this`
Adds a key-value pair if both values are valid.

##### `get(): { formatedPlaceholders: RegExp[]; values: V_Type[] }`
Returns the generated regex patterns and the stored values.

##### `formatToRegex(placeholderFormat: PLACEHOLDERS, placeholderFormat_Value: PLACEHOLDERS_VALUE): void`
Builds regex replacements for each placeholder.

##### `reInit(): boolean`
Clears all stored data and returns a success status.

##### `getSize(): number`
Returns the number of stored values.

## Enums

### `PLACEHOLDERS`

```typescript
export enum PLACEHOLDERS {
  DEFAULT = `\\{\\{${PLACEHOLDERS_VALUE.DEFAULT}\\}\\}`
}
```

### `PLACEHOLDERS_VALUE`

```typescript
export enum PLACEHOLDERS_VALUE {
  DEFAULT = 'placeholder'
}
```

## Use Cases

- Email templates
- HTML and text generation
- Configuration and environment-specific output
- Report generation
- User notification messages

## License

This project is distributed under the repository's package license and follows the same licensing terms as the rest of the String Processor library.

