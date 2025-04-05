type Num = string | number;

export default class SchemaErrors {
  static invalidFormat(field: string) {
    return `Invalid ${field} format.`;
  }

  static invalidType(field: string, type: string) {
    return `${field} must be a ${type}.`;
  }

  static max(field: string, value: Num) {
    return `${field} must be less than or equal to ${value} characters long.`;
  }

  static min(field: string, value: Num) {
    return `${field} must be greater than or equal to ${value} characters long.`;
  }

  static required(field: string) {
    return `${field} is required.`;
  }

  static null(field: string) {
    return `${field} cannot be null.`;
  }

  static invalidValue(field: string, value: string) {
    return `${field} cannot have the value "${value}".`;
  }

  static notInEnum(field: string, values: string[]) {
    return `${field} must be one of the following: ${values.join(', ')}.`;
  }

  static tooSmall(field: string, value: Num) {
    return `${field} must be greater than or equal to ${value}.`;
  }

  static tooLarge(field: string, value: Num) {
    return `${field} must be less than or equal to ${value}.`;
  }

  static nonEmpty(field: string) {
    return `${field} cannot be empty.`;
  }

  static invalidLength(field: string, value: Num) {
    return `${field} must have exactly ${value} characters.`;
  }

  static patternMismatch(field: string) {
    return `${field} has an invalid pattern.`;
  }

  static mismatch(field1: Num, field2: Num) {
    return `${field1} does not match ${field2}.`;
  }
}
