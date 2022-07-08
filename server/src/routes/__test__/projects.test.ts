import request from 'supertest';
import { app } from '../../app';
import { prismaMock } from '../../test/setup';

const url = '/api/projects';

it('NOT return 404 for /api/projects', async () => {
    prismaMock.project.findMany.mockResolvedValue([]);

    const response = await request(app)
        .get(url)
        .send({});

    expect(response.status).not.toEqual(404);
});

it('returns projects array', async () => {
    const projects = [
        { id: 'p1', createdAt: new Date(), updatedAt: new Date(), published: true, title: 'super project' },
    ]

    prismaMock.project.findMany.mockResolvedValue(projects);

    const response = await request(app).get(url).send({});
    const expectedProjects = projects.map(p => ({ ...p, createdAt: p.createdAt.toISOString(), updatedAt: p.updatedAt.toISOString() }));
    expect(response.body).toEqual({ projects: expectedProjects });
});
