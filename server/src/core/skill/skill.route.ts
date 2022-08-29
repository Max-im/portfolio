import { Router } from 'express';
import { skillController } from './skill.controller';

const router = Router();

router.get('/', skillController.getData);

export default router;
