const pool = require("./pool");

/**
 * todo: make queries safer against sql injection using an ORM
 */

/**
 * gets all messages from the database
 * returns an array with message objects
 */
async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages;");
    return rows;
}

/**
 * gets a specific message from the database, given an id
 * returns a message object
 */
async function getMessage(id) {
    const query = `SELECT * FROM messages
                   WHERE id=${id};`;
    const { rows } = await pool.query(query);
    return rows[0];
}

/**
 * inserts a message into the database given a name and a message
 */
async function insertMessage(name, message) {
    const color = Math.floor(Math.random() * 5) + 1;
    await pool.query("INSERT INTO messages (name, message, color, pinned) VALUES ($1, $2, $3, FALSE);", [name,  message, color]);
}

module.exports = {
    getAllMessages,
    getMessage,
    insertMessage
};