import request from 'supertest';
import { app } from '../../../app';

const url = '/resume';

it('returns 200 code for /resume GET route', async () => {
  const response = await request(app).get(url).send({});

  expect(response.status).toEqual(200);
});
