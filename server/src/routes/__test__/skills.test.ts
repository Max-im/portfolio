import { SkillGroup } from "@prisma/client";
import request from 'supertest';
import { app } from '../../app';
import { prismaMock } from '../../test/setup';

const url = '/api/skills';

it(`NOT return 404 for ${url}`, async () => {
    const response = await request(app)
        .get(url)
        .send({});

    expect(response.status).not.toEqual(404);
});

it('returns skills array', async () => {
    const skills = [
        { id: 1, value: 'jest', isActive: true, group: SkillGroup.OTHER },
        { id: 2, value: 'javascript', isActive: true, group: SkillGroup.FRONTEND },
        { id: 3, value: 'node', isActive: true, group: SkillGroup.BACKEND }
    ]

    prismaMock.skill.findMany.mockResolvedValue(skills);

    const response = await request(app).get(url).send({});

    expect(response.body).toEqual({skills});
});
