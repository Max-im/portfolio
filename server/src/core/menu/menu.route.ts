import { Router } from 'express';
import { menuController } from './menu.controller';

const router = Router();

router.get('/', menuController.getData);

export default router;
