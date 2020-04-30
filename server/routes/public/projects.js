import { Router } from 'express';
import {
  validateGetProjectsNumber,
  validateGetProjects,
  validateGetSingleProject,
} from '../../validation/projects';
import {
  getProjectsNumber,
  getPageProjects,
  getSingleProject,
  getProjectRate,
  changeProjectRate,
} from '../../controllers/projects';
import { isLoggedIn } from '../../validation/permission';

const router = Router();

router.get('/number', validateGetProjectsNumber, getProjectsNumber);
router.get('/single/:id', validateGetSingleProject, getSingleProject);
router.get('/rate/:id', validateGetSingleProject, getProjectRate);
router.get('/:page', validateGetProjects, getPageProjects);
router.post('/rate/:id', isLoggedIn, changeProjectRate);

module.exports = router;
