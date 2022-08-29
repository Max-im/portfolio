import { Router } from 'express';
import { experienceController } from './experience.controller';

const router = Router();

router.get('/', experienceController.getData);

export default router;
