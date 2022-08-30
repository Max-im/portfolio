import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../../exceptions/errors';
import { CreateSkillDto } from './dto/create-skill.dto';
import { skillService } from './skill.service';

class SkillController {
  async getData(req: Request, res: Response, next: NextFunction) {
    try {
      const skillData = await skillService.getData();
      const response = skillService.formatResponse(skillData);
      return res.json(response);
    } catch (err) { next(err) }
  }

  getCategories(req: Request, res: Response, next: NextFunction) {
    res.json(skillService.getCategories());
  }

  async createSkill(req: Request, res: Response, next: NextFunction) {
    const dto = new CreateSkillDto(req.body, req.file);
    
    try {
      dto.validate();
      // const file = await fileLoaderService.
      const newSkill = await skillService.create(dto);
      res.json(newSkill);
    } catch (err) { return next(err) }
  }
}

const skillController = new SkillController();

export { skillController };
