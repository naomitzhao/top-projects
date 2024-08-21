/**
 * creates a new database "messages" and populates it with default messages
 * only to be run once, when creating the db.
 */

const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 100 ),
  message VARCHAR ( 350 ),
  pinned BOOL,
  color INTEGER,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (name, message, color, pinned) 
VALUES
  ('naomi', 'welcome to the message board! remember to be respectful and appropriate (this is a public message board)', 4, TRUE);
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: process.env.DB_STRING
    });
    await client.connect();
    console.log(client);
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();