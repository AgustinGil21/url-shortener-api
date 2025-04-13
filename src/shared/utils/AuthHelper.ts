import { randomInt, randomBytes } from 'crypto';

export default class AuthHelper {
  static generateCode(length = 6) {
    let code = '';

    for (let i = 0; i < length; i++) {
      code += randomInt(0, 10);
    }

    return code;
  }

  static generateAlphanumericCode(length = 6) {
    return randomBytes(length)
      .toString('base64') // could contain / y +
      .replace(/[^a-zA-Z0-9]/g, '') // clean trash
      .substring(0, length);
  }
}
