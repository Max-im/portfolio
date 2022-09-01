import { User } from '../../data/models';
import { ApiError } from '../../exceptions/errors';
import { Logger } from '../../logger';
import { LoginDto } from './dto/login.dto';

const logger = new Logger('user');

class UserService {
  login(dto: LoginDto) {
    
  }
}

const userService = new UserService();

export { userService };
