import { Router } from 'express';
import { projectController } from './project.controller';

const router = Router();

router.get('/', projectController.getData);

router.get('/:id', projectController.getById);

export default router;
