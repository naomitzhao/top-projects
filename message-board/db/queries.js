const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * todo: make queries safer against sql injection using an ORM
 */

/**
 * gets all messages from the database
 * returns an array with message objects
 */
async function getAllMessages() {
    // const { rows } = await pool.query("SELECT * FROM messages;");
    // return rows;
    return await prisma.messages.findMany();
}

/**
 * gets a specific message from the database, given an id
 * returns a message object
 */
async function getMessage(id) {
    const message = await prisma.messages.findUnique({
        where: {
            id: parseInt(id)
        },
    });
    return message;
}

/**
 * inserts a message into the database given a name and a message
 */
async function insertMessage(name, message) {
    const color = Math.floor(Math.random() * 5) + 1;
    await prisma.messages.create({
        data: {
            name,
            message,
            color, 
            pinned: false
        },
    });
}

module.exports = {
    getAllMessages,
    getMessage,
    insertMessage
};