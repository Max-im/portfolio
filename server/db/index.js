import { Client } from 'pg';

const client = new Client({ connectionString: process.env.DB_URL });
client.connect().catch((err) => console.error('Connect Error', err));

module.exports = client;
