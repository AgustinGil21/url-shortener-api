import Converter from './Converter';
import ResponseErrors from './ResponseErrors';
import UUID from './UUID';
import crypto from 'crypto';

export default class Url {
  static getShortURLBody(code: number) {
    const base32 = Converter.toBase32(code);

    // Create unique code
    const input = `${UUID.getUUID()}-${Date.now()}`;
    const cryptoHashString = crypto
      .createHash('sha256')
      .update(input)
      .digest('hex');
    const cryptoHash = cryptoHashString.slice(0, 6);

    return `${base32}.${cryptoHash}`; // => pv.410b4a
  }

  static getShortURL({
    code,
    domain,
    protocol,
  }: {
    code: number;
    domain: string;
    protocol: string;
  }) {
    const urlBody = this.getShortURLBody(code);

    return `${protocol}://${domain}/${urlBody}`;
  }

  static getProtocol(url: string) {
    const validProtocols = ['http', 'https'];
    const splittedUrl = url.split(':');

    // An URL must contain at
    // least one ":" character.
    if (splittedUrl.length < 2) {
      const { message } = ResponseErrors.invalid('url');
      throw new Error(message);
    }

    // splittedUrl => url parts
    const protocol = splittedUrl[0];

    // Check if protocol is
    // valid.
    if (!validProtocols.includes(protocol)) {
      const { message } = ResponseErrors.invalid('protocol');
      throw new Error(message);
    }

    return protocol; // => http || https
  }
}
