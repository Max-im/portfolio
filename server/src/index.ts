import { app } from './app';
import { sequelize } from './data';

const port = process.env.PORT || 5000;
const envVar = [
  'NODE_ENV',
  'DB_NAME',
  'DB_USER',
  'DB_PASSWORD',
  'DB_HOST',
  'DB_PORT',
  'DAILY_TIMING'
];
envVar.forEach((item) => {
  if (!process.env[item]) throw new Error(`${item} must be defined`);
});

sequelize
  .authenticate()
  .then(() => app.listen(port, () => console.log(`server run on port ${port}`)))
  .catch((err) => console.error(err));
