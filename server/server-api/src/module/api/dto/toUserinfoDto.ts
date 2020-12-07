import { User } from '../../../entity/User.entity';

export const toUserInfoDto = (user: User) => {
  delete user.password;
  return user;
};
