import { prisma } from '../../prisma';

class ProjectsService {
  async getProjects() {
    const projects = await prisma.project.findMany({
      where: { published: true },
      include: { skills: true },
    });
    return projects;
  }
}

export const projectsService = new ProjectsService();
