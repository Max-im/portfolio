import axios from 'axios';

export class Github {
  id: number;
  title: string;
  githubUrl: string;
  storefrontUrl: string | null;
  shortDescription: string;
  description: string;
  thumbnail: string;
  skillsUrl: string;
  topicsData: [];
  repoUpdateTimestamp: Date;
  topics: string[];
  skills: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(githubProject: any) {
    this.id = githubProject.id;
    this.title = githubProject.name;
    this.githubUrl = githubProject.html_url;
    this.storefrontUrl = githubProject.homepage;
    this.repoUpdateTimestamp = new Date(githubProject.updated_at);
    this.description = this.getDescription(githubProject);
    this.shortDescription = githubProject.description;
    this.thumbnail = this.getThumbnail();
    this.topics = [];
    this.topicsData = githubProject.topics || [];
    this.skillsUrl = githubProject.languages_url;
    this.skills = [];
    this.createdAt = new Date(githubProject.created_at);
    this.updatedAt = new Date(githubProject.updated_at);
  }

  async getSkills() {
    const languages = await axios.get(this.skillsUrl).catch(err => console.log(err.message))
    if (!(languages && languages.data)) return;
    const langList = Object.keys(languages.data);
    langList.push(...this.topicsData);
    const skills = langList.map((skill) => skill.toLowerCase());
    const uniqSkills = skills.filter(this.onlyUnique);
    this.skills = uniqSkills.filter((skill) => skill.indexOf('#') === -1);
    this.topics = uniqSkills
      .filter((skill) => skill.indexOf('#') !== -1)
      .map((skill) => skill.replace('#', ''));
  }

  onlyUnique(value: string, index: number, self: any[]) {
    return self.indexOf(value) === index;
  }

  private getDescription(githubProject: any) {
    return githubProject.description;
  }

  private getThumbnail() {
    return '';
  }

  get project() {
    return {
      id: this.id,
      title: this.title,
      githubUrl: this.githubUrl,
      storefrontUrl: this.storefrontUrl,
      description: this.description,
      shortDescription: this.shortDescription,
      thumbnail: this.thumbnail,
      topics: this.topics,
      repoUpdateTimestamp: this.repoUpdateTimestamp
    };
  }
}
