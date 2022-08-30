import { Router } from 'express';
import { skillController } from './skill.controller';
import { fileLoaderService } from '../fileLoader/file-loader.service';

const router = Router();

router.get('/', skillController.getData);

router.get('/category', skillController.getCategories);

router.post('/', 
  fileLoaderService.getIconUploader().single('icon'),
  skillController.createSkill
);

export default router;
