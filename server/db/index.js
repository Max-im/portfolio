import { Client } from "pg";

const client = new Client({ connectionString: process.env.DATABASE_URL });
client.connect();

module.exports = client;
