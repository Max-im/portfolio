import prisma from '../../prisma';
import { IProject } from '../github/github-service';

class ProjectsService {
  async getProjects() {
    const projects = await prisma.project.findMany({
      where: { published: true },
      include: { skills: true },
    });
    return projects;
  }

  async seedProjects(projects: IProject[]) {
    // compute and remove deleted
    // compute and add new
    // update if needed
  }
}

export const projectsService = new ProjectsService();
