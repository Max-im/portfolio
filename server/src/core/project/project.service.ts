import { Project } from '../../data/models';
import { ApiError } from '../../exceptions/errors';
import { Logger } from '../../logger';

const logger = new Logger('project');

class ProjectService {
  async getData() {
    return Project.findAll().catch((err) => {
      logger.error(err.message);
      throw ApiError.internal();
    });
  }

  async getById(id: number) {
    return Project.findOne({ where: { id } }).catch((err) => {
      logger.error(err.message);
      throw ApiError.internal();
    });
  }

  async create(projects: any[]) {
    const toCreate = projects.map((item) => item.project);
    return await Project.bulkCreate(toCreate).catch((err) => {
      logger.error(err.message);
      throw ApiError.internal();
    });
  }

  async delete(project: any) {
    return await Project.destroy({ where: { id: project.id } }).catch((err) => {
      logger.error(err.message);
      throw ApiError.internal();
    });
  }

  async update(repo: any) {
    try {
      const dbProject = await this.getById(repo.id);
      if (!dbProject) return;
      await dbProject.update(repo.project);
      return await dbProject.save();
    } catch (err: any) {
      const error = err && err.message ? err.message : 'project update error';
      logger.error(error);
      throw ApiError.internal();
    }
  }
}

const projectService = new ProjectService();

export { projectService };
