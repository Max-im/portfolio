import { SkillGroup } from '@prisma/client';
import prisma from '../../src/prisma';

const skillsData = [
  {value: 'javascript', displayName: 'JavaScript', url: '', group: SkillGroup.FRONTEND},
  {value: 'html', displayName: 'HTML', url: '', group: SkillGroup.FRONTEND},
  {value: 'css', displayName: 'CSS', url: '', group: SkillGroup.FRONTEND},
  {value: 'scss', displayName: 'SCSS', url: '', group: SkillGroup.FRONTEND},
  {value: 'react', displayName: 'React', url: '', group: SkillGroup.FRONTEND},
  {value: 'redux', displayName: 'Redux', url: '', group: SkillGroup.FRONTEND},
  {value: 'vue', displayName: 'Vue', url: '', group: SkillGroup.FRONTEND},
  {value: 'angular', displayName: 'Angular', url: '', group: SkillGroup.FRONTEND},
  {value: 'pattern-lab', displayName: 'Pattern-LAB', url: '', group: SkillGroup.FRONTEND},
  {value: 'canvas', displayName: 'Canvas', url: '', group: SkillGroup.FRONTEND},
  {value: 'handlebars', displayName: 'Handlebars', url: '', group: SkillGroup.FRONTEND},
  // 
  {value: 'node', displayName: 'NodeJS', url: '', group: SkillGroup.BACKEND},
  {value: 'typescript', displayName: 'TypeScript', url: '', group: SkillGroup.BACKEND},
  {value: 'socket-io', displayName: 'SocketIO', url: '', group: SkillGroup.BACKEND},
  // 
  {value: 'redis', displayName: 'Redis', url: '', group: SkillGroup.DATABASE},
  {value: 'mongodb', displayName: 'MongoDB', url: '', group: SkillGroup.DATABASE},
  {value: 'postgresql', displayName: 'PostgreSQL', url: '', group: SkillGroup.DATABASE},
  {value: 'graphql', displayName: 'GraphQL', url: '', group: SkillGroup.DATABASE},
  {value: 'prisma', displayName: 'Prisma', url: '', group: SkillGroup.DATABASE},
  {value: 'sequelize', displayName: 'Sequelize', url: '', group: SkillGroup.DATABASE},
  // 
  {value: 'nginx', displayName: 'Nginx', url: '', group: SkillGroup.CICD},
  {value: 'aws', displayName: 'AWS', url: '', group: SkillGroup.CICD},
  {value: 'jest', displayName: 'Jest', url: '', group: SkillGroup.CICD},
  {value: 'dockerfile', displayName: 'Docker', url: '', group: SkillGroup.CICD},
  {value: 'gulp', displayName: 'Gulp', url: '', group: SkillGroup.CICD},
  {value: 'webpack', displayName: 'Webpack', url: '', group: SkillGroup.CICD},
  {value: 'kubernetes', displayName: 'Kubernetes', url: '', group: SkillGroup.CICD},
  {value: 'nats-streaming', displayName: 'NATS Streaming', url: '', group: SkillGroup.CICD},
]

export async function skillsSeed() {
  for (const skill of skillsData) {
    await prisma.skill.upsert({
      where: {value: skill.value},
      update: {},
      create: skill
    });
  }
}

