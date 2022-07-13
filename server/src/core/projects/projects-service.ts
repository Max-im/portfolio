import prisma from '../../prisma';

export interface IProject {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  title: string;
  description: string;
  gitUrl: string;
  storefront: string;
}

class ProjectsService {
  async getProjects() {
    const projects = await prisma.project.findMany({
      where: { published: true },
      include: { skills: true },
    });

    return projects as IProject[];
  }

  async deleteProjectsByIds(ids: number[]) {
    if (!ids.length) return;
    await prisma.project.deleteMany({ where: { id: { in: ids } } });
  }

  async createPrjects(projects: IProject[]) {
    if (!projects.length) return;
    await prisma.project.createMany({ data: projects });
  }

  async updatePrjects(projects: IProject[]) {
    const promises = projects.map(project => {
      return prisma.project.update({
        where: { id: project.id },
        data: project
      });
    });

    await Promise.all(promises);
  }
}

export const projectsService = new ProjectsService();
