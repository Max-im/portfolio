import { Request, Response, NextFunction } from 'express';
import { educationService } from './education.service';

class EducationController {
  async getData(req: Request, res: Response, next: NextFunction) {
    try {
      const educationData = await educationService.getData();
      return res.json(educationData);
    } catch (err) { next(err) }
  }
}

const educationController = new EducationController();

export { educationController };
