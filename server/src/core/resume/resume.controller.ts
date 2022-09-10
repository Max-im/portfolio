import { Request, Response, NextFunction } from 'express';
import { educationService } from '../education/education.service';
import { experienceService } from '../experience/experience.service';
import { skillService } from '../skill/skill.service';
import { resumeService } from './resume.service';

class ResumeController {
  async getData(req: Request, res: Response, next: NextFunction) {
    try {
      const bioPromise = resumeService.getData();
      const skillPromise = skillService.getData();
      const experiencePromise = experienceService.getData();
      const educationPromise = educationService.getData();

      const [bio, skills, experience, education] = await Promise.all([
        bioPromise,
        skillPromise,
        experiencePromise,
        educationPromise,
      ]);

      res.json({bio, skills, experience, education});
    } catch (err) {
      next(err);
    }
  }
}

const resumeController = new ResumeController();

export { resumeController };
