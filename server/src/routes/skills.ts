import { Router } from 'express';
import { SkillsController } from '../core/skills/skills-controller';

const router = Router();

router.get('/api/skills', SkillsController.getSkills);

export { router as skillsRouter };