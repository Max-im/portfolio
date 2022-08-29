import request from 'supertest';
import { app } from '../../../app';

const url = '/project';

it('returns 200 code for /project GET route', async () => {
  const response = await request(app).get(url).send({});

  expect(response.status).toEqual(200);
});
