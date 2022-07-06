import { prisma } from '../../prisma';

class SkillsService {
  async getSkills() {
    // order by group
    const skills = await prisma.skill.findMany({
      where: { isActive: true },
    });
    return skills;
  }

  async seedSkills(skills) {
    // compute and remove deleted
    // compute and add new
    // update if needed
  }
}

export const skillsService = new SkillsService();
