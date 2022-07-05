import { prisma } from '../../prisma';

class SkillsService {
  async getSkills() {
    // order by group
    const skills = await prisma.skill.findMany({
      where: { isActive: true },
    });
    return skills;
  }
}

export const skillsService = new SkillsService();
