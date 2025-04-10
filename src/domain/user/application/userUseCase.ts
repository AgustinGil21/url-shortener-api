import { TEmailAddress } from '../../../shared/types/interfaces';
import { IUserRepository } from '../repositories/user.repository';
import UserValues from '../repositories/user.values';

interface IRegisterUser {
  emailAddress: TEmailAddress;
  password: string;
  username?: string;
}

export default class UserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  public async registerUser({
    emailAddress,
    password,
    username,
  }: IRegisterUser) {
    const userValues = new UserValues({ emailAddress, password, username });
    const userCreated = await this.userRepository.registerUser(userValues);
    return userCreated;
  }
}
