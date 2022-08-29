import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../../exceptions/errors';
import { projectService } from './project.service';

class ProjectController {
  async getData(req: Request, res: Response, next: NextFunction) {
    try {
      const projectData = await projectService.getData();
      return res.json(projectData);
    } catch (err) {
      next(err);
    }
  }
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) throw ApiError.internal();
      const projectData = await projectService.getById(id);
      return res.json(projectData);
    } catch (err) {
      next(err);
    }
  }
}

const projectController = new ProjectController();

export { projectController };
