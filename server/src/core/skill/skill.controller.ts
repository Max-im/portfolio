import { Request, Response, NextFunction } from 'express';
import { skillService } from './skill.service';

class SkillController {
  async getData(req: Request, res: Response, next: NextFunction) {
    try {
      const skillData = await skillService.getData();
      const response = skillService.formatResponse(skillData);
      return res.json(response);
    } catch (err) { next(err) }
  }
}

const skillController = new SkillController();

export { skillController };
