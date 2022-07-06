import axios from 'axios';
import { skillsService } from '../skills/skills-service';
import { projectsService } from '../projects/projects-service';

class GithubService {
  private async getData() {
    try {
        // make sure get all the repos
      // const url = 'https://api.github.com/users/max-im/repos';
      // const { data } = await axios.get(url);
      // return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  private handleGithubData(data) {
    const fields = ['created_at', 'updated_at', 'pushed_at', 'html_url', 'id', 'name', 'description', 'languages_url', 'size', 'homepage', 'topics'];

    const handled = data
      .filter((project) => !project.private && !project.fork)
      .map((project) => {
        const ghProject = {};
        fields.forEach(key => ghProject[key] = project[key]);
        return ghProject;
      });

    return handled;
  }

  private cumputeSkills(data) {}

  private cumputeProjects(data) {}

  async start() {
    const data = await this.getData();

    if (!data) return null;

    const handled = this.handleGithubData(data);
    const skills = this.cumputeSkills(handled);
    const projects = this.cumputeProjects(handled);

    skillsService.seedSkills(skills);
    projectsService.seedProjects(projects);
  }
}

export const githubService = new GithubService();
