import { Request, Response, NextFunction } from 'express';

class MenuController {
  async getData(req: Request, res: Response, next: NextFunction) {
    try {
      const menuData = '';
      return res.json(menuData);
    } catch (err) { next(err) }
  }
}

const menuController = new MenuController();

export { menuController };
