import axios from 'axios';
import { skillsService } from '../skills/skills-service';
import { projectsService, IProject } from '../projects/projects-service';
import { IgitRepo } from './github-interfaces';
import { Project } from '../projects/project-model';


class GithubService {
  private async getRepos() {
    return new Promise((res) => {
      const {item} = require('./test_1');
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

  private computeUpdatedProjects(dbProjects: IProject[], gitProjects: IProject[]) {
    const toCreate = [] as IProject[];
    const toUpdate = [] as IProject[];
    const toDelete = [] as IProject[];
    
    gitProjects.forEach(project => {
      const dbProject = dbProjects.find(dbProject => dbProject.id === project.id);

      // add new project
      if (!dbProject) toCreate.push(project);

      // updated projects
      else if (new Date(dbProject.updatedAt).getTime() !== new Date(project.updatedAt).getTime()) {
        toUpdate.push(project);
      }
    });

    dbProjects.forEach(dbProject => {
      const project = gitProjects.find(project => project.id === dbProject.id);

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
    const deletedProjectsIds = toDelete.map(p => p.id);
    const updatedProjectsIds = toUpdate.map(p => p.id);
    const createdProjectsIds = toCreate.map(p => p.id);

    await projectsService.createPrjects(toCreate);
    await projectsService.deleteProjectsByIds(deletedProjectsIds);
    await projectsService.updatePrjects(toUpdate);

    // Skills
    const toCreateSkills = filtredRepos.filter(repo => createdProjectsIds.includes(repo.id));
    const toDeleteSkills = filtredRepos.filter(repo => deletedProjectsIds.includes(repo.id));
    const toUpdateSkills = filtredRepos.filter(repo => updatedProjectsIds.includes(repo.id));

    for (const repo of toCreateSkills) {
      const skills = await this.getSkills(repo.languages_url);
      const skillsVal = Object.keys(skills).map(skill => skill.toLowerCase());
      await skillsService.addSkills(skillsVal, repo.id);
    }

  }
}

export const githubService = new GithubService();
