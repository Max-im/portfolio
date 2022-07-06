import { prisma } from '../../prisma';

class ProjectsService {
  async getProjects() {
    const projects = await prisma.project.findMany({
      where: { published: true },
      include: { skills: true },
    });
    return projects;
  }

  async seedProjects(projects) {
    // compute and remove deleted
    // compute and add new
    // update if needed
  }
}

export const projectsService = new ProjectsService();
