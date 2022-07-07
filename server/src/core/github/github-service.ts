import axios, { AxiosResponse } from 'axios';
import { skillsService } from '../skills/skills-service';
import { projectsService } from '../projects/projects-service';

interface IgitRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: any;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface IProject {
  id: string;
  name: string;
  description: string | null;
  html_url: string;
  size: number;
  homepage: string | null;
  topics: string[];
  languages_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

class GithubService {
  private async getData() {
    try {
      const url = 'https://api.github.com/users/max-im/repos';
      const pages = [1, 2, 3, 4, 5];
      const repos = [];

      for (const page of pages) {
        const { data } = await axios.get<IgitRepo[]>(`${url}?page=${page}`);
        if (!data.length) break;
        repos.push(...data);
      }

      return repos;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  private handleGithubData(data: IgitRepo[]) {
    const fields = [
      'created_at',
      'updated_at',
      'pushed_at',
      'html_url',
      'id',
      'name',
      'description',
      'languages_url',
      'size',
      'homepage',
      'topics',
    ];

    const handled = data
      .filter((project) => !project.private && !project.fork)
      .map((project) => {
        const ghProject = {} as IProject;
        // @ts-ignore
        fields.forEach((key: string) => (ghProject[key] = project[key]));
        return ghProject;
      });

    return handled;
  }

  private cumputeSkills(data: IProject[]) {
    return []
  }

  private cumputeProjects(data: IProject[]) {
    return []
  }

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
