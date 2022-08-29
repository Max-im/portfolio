import { githubService } from './github.service';
import { projectService } from '../project/project.service'; 
import { skillService } from '../skill/skill.service';

class GithubController {
  async execute() {
    // get data
    const githubData = await githubService.getData();
    if (!githubData) return;

    // format data
    const repos = githubService.format(githubData);

    // get db projects
    const dbProjects = await projectService.getData();

    // retrieve new projects
    const newProjects = await githubService.getNewProjects(dbProjects, repos);

    // retrieve deleted projects
    const toDeleteProjects = githubService.getDeletedProjects(dbProjects, repos);

    // retrieve updated projects
    const toUpdateProjects = await githubService.getUpdatedProjects(dbProjects, repos);
    console.log({toUpdateProjects})
    // get all skills
    const dbSkills = await skillService.getData();

    // retrive new skills
    const newSkills: string[] = await githubService.getNewSkills(newProjects, dbSkills);

    // create new skills
    if (newSkills.length) await skillService.create(newSkills);

    // create new projects
    if (newProjects.length) await projectService.create(newProjects);

    // delete redundant projects
    if (toDeleteProjects.length) await githubService.deleteProjects(toDeleteProjects);
    
    // update projects
    if (toUpdateProjects.length) await githubService.updateProjects(toUpdateProjects);
    
    // update create project_skills
    if (newProjects.length) await githubService.bindProjectSkills(newProjects);

    // update project_skills
  }
}

const githubController = new GithubController();

export { githubController };
