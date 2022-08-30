import axios from 'axios';
import { projectSkillsService } from '../project-skills/project-skills.service';
import { projectService } from '../project/project.service';
import { skillService } from '../skill/skill.service';
import { Github } from './github.model'; 

class GithubService {
  async getData() {
    try {
      const data = [];
      const url = 'https://api.github.com/users/max-im/repos';

      for (const page of [1,2,3,4,5,6,7,8,9,10]) {
        const pageData = await axios.get(`${url}?page=${page}`)
        if (!pageData.data.length) break;
        data.push(...pageData.data);
      }

      return data;
    } catch(err) {
      // log error
      return null;
    }
  }

  format(githubData: any[]) {
    return githubData
      .filter(project => !project.fork && !project.private)
      .map(project => new Github(project));
  }

  async getNewProjects(dbProjects: any[], repos: any[]) {
    const dbProjectIds = dbProjects.map(project => project.id);
    const newProjects = repos.filter(project => dbProjectIds.indexOf(project.id) === -1);
    await this.getSkills(newProjects);
    return newProjects;
  }

  getDeletedProjects(dbProjects: any[], repos: any[]) {
    const reposIds = repos.map(project => project.id);
    return dbProjects.filter(project => reposIds.indexOf(project.id) === -1);
  }

  async getUpdatedProjects(dbProjects: any[], repos: any[]) {
    const updatedProjects = repos.filter(repo => {
      const dbProject = dbProjects.find(p => p.id === repo.id)
      if (!dbProject) return false;
      return repo.repoUpdateTimestamp.getTime() !== new Date(dbProject.repoUpdateTimestamp).getTime();
    });

    await this.getSkills(updatedProjects);
    return updatedProjects;
  }

  private async getSkills(projects: any[]) {
    for (const project of projects) {
      await project.getSkills();
    }
  }

  async getNewSkills(newProjects: any[], dbSkills: any[]) {
    const newSkills = [] as string[];
    const skillsIds = dbSkills.map(skill => skill.id);

    if (!newProjects.length) return newSkills;

    for (let i = 0; i < newProjects.length; i++) {
      const project = newProjects[i];

      project.skills.forEach((skill: string) => {
        if (skillsIds.indexOf(skill) === -1 && newSkills.indexOf(skill) === -1) {
          newSkills.push(skill);
        }
      });
    }

    return newSkills;
  }

  async createSkills(skillsArr: any[]) {
    const toCreateArr = skillsArr.map((id) => ({ id, displayName: id }));
    await skillService.createBulk(toCreateArr);
  }

  async bindProjectSkills(projects: any[]) {
    for (const project of projects) {
      await projectSkillsService.create(project);
    }
  }

  async deleteProjects(projects: any[]) {
    for (const project of projects) {
      await projectService.delete(project);
    }
  }

  async updateProjects(projects: any[]) {
    for (const project of projects) {
      await projectService.update(project);
    }
  }
}

const githubService = new GithubService();

export { githubService };
