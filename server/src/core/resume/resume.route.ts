import { Router } from 'express';
import { resumeController } from './resume.controller';

const router = Router();

router.get('/', resumeController.getData);

export default router;
