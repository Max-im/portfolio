import { Router } from 'express';
import { updateProjectSkills, updateProjectText } from '../../controllers/admin/project';

const router = Router();

router.put('/:id', updateProjectSkills, updateProjectText);

module.exports = router;
