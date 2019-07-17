import { Client } from "pg";

console.log(process.env.DATABASE_URL);
const client = new Client({ connectionString: process.env.DATABASE_URL });
client.connect();

module.exports = client;
