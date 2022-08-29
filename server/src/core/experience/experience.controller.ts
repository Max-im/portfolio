import { Request, Response, NextFunction } from 'express';
import { experienceService } from './experience.service';

class ExperienceController {
  async getData(req: Request, res: Response, next: NextFunction) {
    try {
      const experienceData = await experienceService.getData();
      return res.json(experienceData);
    } catch (err) { next(err) }
  }
}

const experienceController = new ExperienceController();

export { experienceController };
