import { Skill } from '../../data/models';
import { ApiError } from '../../exceptions/errors';
import { Logger } from '../../logger';

const logger = new Logger('skill');

class SkillService {
  getData() {
    return Skill.findAll({
      attributes: ['id', 'displayName', 'icon', 'category'],
    }).catch((err) => {
      logger.error(err.message);
      throw ApiError.internal();
    });
  }

  formatResponse(skillsArr: any[]) {
    const response = {};

    for (const skill of skillsArr) {
      // @ts-ignore: Unreachable code error
      response[skill.category] = response[skill.category] || [];
      // @ts-ignore: Unreachable code error
      response[skill.category].push(skill);
    }

    return response;
  }

  create(skillsArr: string[]) {
    const toCreateArr = skillsArr.map((id) => ({ id, displayName: id }));
    return Skill.bulkCreate(toCreateArr).catch((err) => {
      logger.error(err.message);
      throw ApiError.internal();
    });
  }
}

const skillService = new SkillService();

export { skillService };
