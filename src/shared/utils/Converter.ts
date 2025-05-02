import ResponseErrors from './ResponseErrors';
import SchemaErrors from './SchemaErrors';

export default class Converter {
  static toBase32(code: number) {
    const alphabet = 'abcdefghijkmnpqrstuvwxyz23456789';
    let encoded = '';

    const { message: invalidMsg } = ResponseErrors.invalid('code');

    // Check if code is valid
    if (typeof code !== 'number') {
      throw new Error(invalidMsg);
    } else if (!Number.isInteger(code)) {
      throw new Error(invalidMsg);
    }

    // Just for auto incremental
    // integers.
    // Transforms the number for
    // an alphabetic character.
    do {
      encoded = alphabet[code % 32] + encoded;
      code = Math.floor(code / 32);
    } while (code > 0);

    return encoded; // => pv
  }
}
