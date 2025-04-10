import { Pool } from 'pg';
import { IUserRepository } from '../../repositories/user.repository';
import { IUserEntity } from '../../repositories/user.entity';

export default class PostgresRepository implements IUserRepository {
  constructor(private readonly db: Pool) {}

  public async registerUser(data: IUserEntity): Promise<void> {}
}
