import { Request, Response, NextFunction } from 'express';
import { skillsService } from './skills-service';

export class SkillsController {
  static async getSkills(req: Request, res: Response, next: NextFunction) {
    const skills = await skillsService.getSkills();
    res.json({ skills });
  }
}
