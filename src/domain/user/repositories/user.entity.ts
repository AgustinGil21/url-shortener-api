import {
  TAccountType,
  TDate,
  TEmailAddress,
  TUUID,
} from '../../../shared/types/interfaces';

export interface IUserEntity {
  id: TUUID;
  emailAddress: TEmailAddress;
  password: string;
  username?: string;
  created_at: TDate;
  deleted: boolean;
  account_type: TAccountType;
}
