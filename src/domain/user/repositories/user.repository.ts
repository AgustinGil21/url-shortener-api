import { TUUID } from '../../../shared/types/interfaces';
import { IUserEntity } from './user.entity';

export interface IUserRepository {
  registerUser(data: IUserEntity): Promise<void>;
  getUserData(id: TUUID): Promise<IUserEntity | null>;
  deleteUser(id: TUUID): Promise<void>;
}
