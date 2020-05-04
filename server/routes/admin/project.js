import { Router } from 'express';
import {
  updateProjectSkills,
  updateProjectText,
  getProjectLevels,
} from '../../controllers/admin/project';
import { isLoggedIn, isAdmin } from '../../validation/permission';

const router = Router();

router.get('/levels', isLoggedIn, isAdmin, getProjectLevels);

router.put('/:id', isLoggedIn, isAdmin, updateProjectSkills, updateProjectText);

module.exports = router;
