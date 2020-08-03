import { Router } from 'express';
import {
  validateGetProjectsNumber,
  validateGetProjects,
  validateGetSingleProject,
  validateAddComment
} from '../../validation/projects';
import {
  getProjectsNumber,
  getPageProjects,
  getSingleProject,
  getProjectRate,
  changeProjectRate,
  getProjectRecommendations
} from '../../controllers/projects';
import { getProjectComments, createComment, retunCommentById} from '../../controllers/comments'
import { isLoggedIn } from '../../validation/permission';

const router = Router();

router.get('/number', validateGetProjectsNumber, getProjectsNumber);
router.get('/single/:id', validateGetSingleProject, getSingleProject);
router.get('/recommendations/:id', validateGetSingleProject, getProjectRecommendations);
router.get('/comments/:id', validateGetSingleProject, getProjectComments);
router.post('/comments/', isLoggedIn, validateAddComment, createComment, retunCommentById);
router.get('/rate/:id', validateGetSingleProject, getProjectRate);
router.post('/rate/:id', isLoggedIn, changeProjectRate);
router.get('/:page', validateGetProjects, getPageProjects);

module.exports = router;
