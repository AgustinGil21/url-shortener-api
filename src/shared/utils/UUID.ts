import { v4 as uuid, validate } from 'uuid';
import { TUUID } from '../types/interfaces';

export default class UUID {
  static getUUID() {
    return uuid();
  }

  static validateUUID(uuid: TUUID) {
    return validate(uuid);
  }
}
