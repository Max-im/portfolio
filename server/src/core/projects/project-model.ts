import { IgitRepo } from "../github/github-interfaces";
import { IProject } from "./projects-service";

export class Project implements IProject {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    published: boolean;
    title: string;
    description: string;
    gitUrl: string;
    storefront: string;

    constructor(project: IProject) {
        this.id = project.id;
        this.createdAt = project.createdAt;
        this.updatedAt = project.updatedAt;
        this.published = project.published;
        this.title = project.title;
        this.description = project.description;
        this.gitUrl = project.gitUrl;
        this.storefront = project.storefront;
    }

    static transformFromGit(gitRepo: IgitRepo) {
        return new Project({
            id: gitRepo.id,
            createdAt: new Date(gitRepo.created_at),
            updatedAt: new Date(gitRepo.updated_at),
            published: true,
            title: gitRepo.name,
            description: gitRepo.description || '',
            gitUrl: gitRepo.html_url,
            storefront: gitRepo.homepage || '',
        })
    }
}