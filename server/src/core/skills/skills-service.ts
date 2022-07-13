import prisma from '../../prisma';

export interface ISkill {
  value: string,
}
class SkillsService {
  async getSkills() {
    // order by group
    return await prisma.skill.findMany({ where: { isActive: true }});
  }

  async addSkills(skills: string[], projectId: number) {
    const skillsPromises = skills.map(skill => {
      return prisma.skill.upsert({
        where: { value: skill },
        update: { projects: {create: [{ projectId: projectId }]}},
        create: { value: skill, url: '', displayName: '', projects: {create: [{ projectId: projectId }]}}
      });
    });

    await Promise.all(skillsPromises);
  }

  async removeSkills() { }

  async updateSkills() { }
}

export const skillsService = new SkillsService();
