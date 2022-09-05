import { Skill } from '../../data/models';
import { ApiError } from '../../exceptions/errors';
import { Logger } from '../../logger';
import { CreateSkillDto } from './dto/create-skill.dto';
import { fileLoaderService } from '../fileLoader/file-loader.service';

const logger = new Logger('skill');

class SkillService {
  getCategories() {
    return ['backend', 'frontend', 'cicd', 'database', 'other'];
  }

  getData() {
    return Skill.findAll({
      attributes: ['id', 'displayName', 'icon', 'category'],
      where: { active: true },
    }).catch((err) => {
      logger.error(err.message);
      throw ApiError.internal();
    });
  }

  formatResponse(skillsArr: any[]) {
    const response: { [key: string]: string[] } = {};

    for (const skill of skillsArr) {
      response[skill.category] = response[skill.category] || [];
      response[skill.category].push(skill);
    }

    return response;
  }

  createBulk(toCreateArr: any[]) {
    return Skill.bulkCreate(toCreateArr).catch((err) => {
      logger.error(err.message);
      throw ApiError.internal();
    });
  }

  create(dto: CreateSkillDto) {
    const data = dto.data;
    return Skill.create(data).catch((err) => {
      if (data.icon) {
        fileLoaderService.deleteIcon(data.icon);
      }
      logger.error(err.message);
      throw ApiError.internal();
    });
  }
}

const skillService = new SkillService();

export { skillService };
