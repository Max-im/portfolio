import { Router } from 'express';
import { educationController } from './education.controller';

const router = Router();

router.get('/', educationController.getData);

export default router;
