import prisma from '../../prisma';

interface ISkill {
  value: string,
}
class SkillsService {
  async getSkills() {
    // order by group
    const skills = await prisma.skill.findMany({
      where: { isActive: true },
    });
    return skills;
  }

  async seedSkills(skills: ISkill[]) {
    // compute and remove deleted
    // compute and add new
    // update if needed
  }

  async addSkills(skills: ISkill[]) {
    prisma.skill.createMany({ data: skills });
  }

  async removeSkills() { }

  async updateSkills() { }
}

export const skillsService = new SkillsService();
