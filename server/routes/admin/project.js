import { Router } from 'express';
import { updateProjectSkills, updateProjectText } from '../../controllers/admin/project';
import { isAdmin } from '../../validation/permission';

const router = Router();

router.put('/:id', isAdmin, updateProjectSkills, updateProjectText);

module.exports = router;
