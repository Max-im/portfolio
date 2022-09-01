import { Request, Response, NextFunction } from 'express';
import { LoginDto } from './dto/login.dto';
import { userService } from './user.service';

class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = new LoginDto(req.body);
      dto.validate();
      const user = await userService.login(dto);
      return res.json(user);
    } catch (err) { next(err) }
  }
}

const userController = new UserController();

export { userController };
