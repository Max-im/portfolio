import { Request, Response, NextFunction } from 'express';
import { projectsService } from './projects-service';

export class ProjectsController {
  static async getProjects(req: Request, res: Response, next: NextFunction) {
    const projects = await projectsService.getProjects();
    res.json({ projects });
  }
}
