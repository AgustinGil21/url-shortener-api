import {
  TAccountType,
  TDate,
  TEmailAddress,
  TUUID,
} from '../../../shared/types/interfaces';
import DateHelper from '../../../shared/utils/DateHelper';
import UUID from '../../../shared/utils/UUID';
import { IUserEntity } from './user.entity';

interface IUserValues {
  emailAddress: TEmailAddress;
  password: string;
  username?: string;
}

export default class UserValues implements IUserEntity {
  id: TUUID;
  emailAddress: TEmailAddress;
  password: string;
  username?: string;
  created_at: TDate;
  deleted: boolean;
  account_type: TAccountType;

  constructor({ emailAddress, password, username }: IUserValues) {
    this.id = UUID.getUUID() as TUUID;
    this.created_at = DateHelper.getTimestamp();
    this.emailAddress = emailAddress;
    this.password = password;
    this.username = username ?? emailAddress.split('@')[0];
    this.deleted = false;
    this.account_type = 'free';
  }
}
