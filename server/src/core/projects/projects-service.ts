import prisma from '../../prisma';
import { IGitProject } from '../github/github-interfaces';

export interface IProject {
  id: string;
  gitId: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  title: string;
  description: string;
  gitUrl: string;
  storefront: string;
  topics: string[]
}
class ProjectsService {
  async getProjects() {
    const projects = await prisma.project.findMany({
      where: { published: true },
      include: { skills: true },
    });

    return projects as IProject[];
  }

  // async deleteProjectsByGitIds(ids: string[]) {
  //   if (!ids.length) return;

  //   await prisma.project.deleteMany({
  //     where: {
  //       gitId: {
  //         in: ids
  //       }
  //     }
  //   }); 
  // }

  async createPrjects(projects: IProject[]) {
    await prisma.project.createMany({
      data: projects
    })
  }

  async seedProjects(projects: IGitProject[]) {
   
  }
}

export const projectsService = new ProjectsService();
