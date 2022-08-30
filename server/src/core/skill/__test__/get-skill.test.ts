import request from 'supertest';
import { app } from '../../../app';

const url = '/skill';

it('returns 200 code for /skill GET route', async () => {
  const response = await request(app).get(url).send({});

  expect(response.status).toEqual(200);
});
