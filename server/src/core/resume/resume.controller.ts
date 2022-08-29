import { Request, Response, NextFunction } from 'express';
import { resumeService } from './resume.service';

class ResumeController {
  async getData(req: Request, res: Response, next: NextFunction) {
    try {
      const resumeData = await resumeService.getData();
      return res.json(resumeData);
    } catch (err) { next(err) }
  }
}

const resumeController = new ResumeController();

export { resumeController };
