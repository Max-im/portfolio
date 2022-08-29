import { ProjectSkills } from '../../data/models';
import { ApiError } from '../../exceptions/errors';

class ProjectSkillsService {
  async getData() {
    return ProjectSkills.findAll().catch((err) => {
      // log error
      throw ApiError.internal();
    });
  }

  async getById(id: number) {
    try {
      return ProjectSkills.findOne({ where: { id } });
    } catch (err) {
      // log error
      throw ApiError.internal();
    }
  }

  async create(project: any) {
    const toCreate = project.skills.map((skillId: string) => ({skillId, projectId: project.id}));
    return await ProjectSkills.bulkCreate(toCreate).catch(err => console.log(err.message))
  }
}

const projectSkillsService = new ProjectSkillsService();

export { projectSkillsService };
