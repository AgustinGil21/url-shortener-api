export default class Converter {
  static toBase32(code: number) {
    const alphabet = 'abcdefghijkmnpqrstuvwxyz23456789';
    let encoded = '';

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
