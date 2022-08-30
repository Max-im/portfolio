import request from 'supertest';
import { app } from '../../../app';
import { Skill } from '../skill.model';
import * as path from 'path';
import * as fs from 'fs';
import { wait } from '../../../test/setup';

const url = '/skill';

const clearSkillDb = async () => {
  await Skill.destroy({ where: { id: 'test' } });
  await wait();
};

const deleteIcon = (iconName: string) => {
  fs.unlinkSync(path.resolve(__dirname, '../../../../public/icons/', iconName));
};

beforeEach(async () => {
  await wait();
});

it('returns 422 code for /skill POST route if get empty body', async () => {
  const response = await request(app).post(url).send({});
  expect(response.status).toEqual(422);
});

it('returns error message for /skill POST route if has no id', async () => {
  const response = await request(app).post(url).send({});
  expect(response.body.message).toEqual("ID field is required");
});

it('returns error message code for /skill POST route if has no displayName', async () => {
  const response = await request(app).post(url).send({id: 'test'});
  expect(response.body.message).toEqual("DisplayName field is required");
});

it('gets error when tryes to create skill with invalid category', async () => {
  const options = { id: 'test', displayName: 'Test', category: 'invalid' };
  const response = await request(app).post(url).send(options);
  expect(response.body.message).toEqual("Invalid category 'invalid'");
});

it('creates new skill without icon', async () => {
  await clearSkillDb();
  const options = {id: 'test', displayName: 'Test', category: 'backend'}
  const response = await request(app).post(url).send(options);
  expect(response.status).toEqual(200);
});

it('gets error when tryes to create duplicated skill', async () => {
  await clearSkillDb();
  const options = {id: 'test', displayName: 'Test', category: 'backend'}
  const response1 = await request(app).post(url).send(options);
  expect(response1.status).toEqual(200);

  await wait();

  const response2 = await request(app).post(url).send(options);
  expect(response2.status).toEqual(500);
  expect(response2.body.message).toEqual('Ooooop, something went wrong');
});

it('creates new skill with icon', async () => {
    await clearSkillDb();
    const icon = path.resolve(__dirname, '../../../test/assets/icon.jpg');
    const response = await request(app)
      .post(url)
      .set('content-type', 'application/octet-stream')
      .field('id', 'test')
      .field('displayName', 'Test')
      .field('category', 'backend')
      .attach('icon', icon);

  expect(response.status).toEqual(200);
  deleteIcon(response.body.icon.replace(/^\/icons\//,''));
});

it('not save icon file if gets creating skill error', async () => {
  await clearSkillDb();
  const options = { id: 'test', displayName: 'Test', category: 'backend' };
  const response0 = await request(app).post(url).send(options);
  expect(response0.status).toEqual(200);

  await wait();

  const icon = path.resolve(__dirname, '../../../test/assets/icon.jpg');
  const response = await request(app)
    .post(url)
    .set('content-type', 'application/octet-stream')
    .field('id', 'test')
    .field('displayName', 'Test')
    .attach('icon', icon);

  expect(response.status).toEqual(500);
});
