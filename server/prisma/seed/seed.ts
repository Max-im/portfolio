import prisma from '../../src/prisma';
import { userSeed } from './user';
import { skillsSeed } from './skills';

Promise.all([userSeed(), skillsSeed()])
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => await prisma.$disconnect())




