import { Role } from '@prisma/client';
import prisma from '../../src/prisma';

export async function userSeed() {
  return prisma.user.upsert({
    where: { email: 'pogidaevmo@gmail.com' },
    update: {},
    create: { email: 'pogidaevmo@gmail.com', role: Role.ADMIN },
  });
}

