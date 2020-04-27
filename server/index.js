const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const { errorHandler } = require('./errorHandling');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// production
if (process.env.NODE_ENV === 'production') {
  const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
    flags: 'a',
  });
  app.use(logger('combined', { stream: logStream }));
  app.use(helmet());
}
// development
else if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('@babel/register');
  // eslint-disable-next-line
  require('dotenv').config({ path: 'server/config/variables.env' });
  // eslint-disable-next-line
  const cors = require('cors');
  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
  app.use(logger('dev'));
}
// testing
else if (process.env.NODE_ENV === 'testing') {
  // TODO: testing
}

// routes
app.use('/', require('./routes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
  });
}

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.info('server run'));
