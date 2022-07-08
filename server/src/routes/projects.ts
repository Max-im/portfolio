import { Router } from 'express';
import { ProjectsController } from '../core/projects/projects-controller';

const router = Router();

router.get('/api/projects', ProjectsController.getProjects);

export { router as projectsRouter };