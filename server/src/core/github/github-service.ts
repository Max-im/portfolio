import axios from 'axios';
import { ISkill, skillsService } from '../skills/skills-service';
import { projectsService, IProject } from '../projects/projects-service';
import { IGitProject, IgitRepo } from './github-interfaces';
import { Project } from '../projects/project-model';


class GithubService {
  private async getRepos() {
    return new Promise((res) => {
      const {item} = require('./test_2');
      res(item as IgitRepo[])
    })
    // try {
    //   const url = 'https://api.github.com/users/max-im/repos';
    //   const pages = [1, 2, 3, 4, 5];
    //   const repos = [];

    //   for (const page of pages) {
    //     const { data } = await axios.get<IgitRepo[]>(`${url}?page=${page}`);
    //     if (!data.length) break;
    //     repos.push(...data);
    //   }

    //   return repos;
    // } catch (err) {
    //   console.log(err);
    //   return null;
    // }
  }

  private async getSkills(url: string) {
        const { data } = await axios.get(url);
        return data;
  }

  private filterTargetRepos(gitRepos: IgitRepo[]) {
    return gitRepos.filter((project) => !project.private && !project.fork);
  }

  private transformToProjects(gitRepos: IgitRepo[]) {
    return gitRepos.map(repo => Project.transformFromGit(repo));
  }

  private handleGithubData(data: IgitRepo[]) {
    return data
      .filter((project) => !project.private && !project.fork)
      .map((project) => Project.transformFromGit(project));
  }

  computeUpdatedProjects(dbProjects: IProject[], gitProjects: IProject[]) {
    const toCreate = [] as IProject[];
    const toUpdate = [] as IProject[];
    const toDelete = [] as IProject[];
    
    gitProjects.forEach(project => {
      const dbProject = dbProjects.find(dbProject => dbProject.gitId === project.gitId);

      // add new project
      if (!dbProject) toCreate.push(project);

      // updated projects
      else if (new Date(dbProject.updatedAt).getTime() !== new Date(project.updatedAt).getTime()) {
        toUpdate.push(project);
      }
    });

    dbProjects.forEach(dbProject => {
      const project = gitProjects.find(project => project.gitId === dbProject.gitId);

      if (!project) toDelete.push(dbProject);
    });

    return {toCreate, toUpdate, toDelete};
  }

  async start() {
    const gitRepos = await this.getRepos() as IgitRepo[];

    if (!(gitRepos && gitRepos.length)) return null;

    const filtredRepos = this.filterTargetRepos(gitRepos);
    const gitProjects = this.transformToProjects(filtredRepos);
    const dbProjects = await projectsService.getProjects();

    const {toCreate, toUpdate, toDelete} = this.computeUpdatedProjects(dbProjects, gitProjects);

    await projectsService.createPrjects(toCreate);
    // await projectsService.deleteProjectsByGitIds(toDelete);
    // await projectsService

    // skillsService.seedSkills();
    // projectsService.seedProjects();
  }
}

export const githubService = new GithubService();
