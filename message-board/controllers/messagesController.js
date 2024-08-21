const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

/**
 * controller function to get all messages in the database and display them
 */
async function getAllMessagesController(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", { messages: messages });
}

/**
 * controller function to render the new message form
 */
async function newMessageGetController(req, res) {
    res.render("form", {
        nameText: "",
        messageText: ""
    });
}

/**
 * middleware function to take form inputs and put a new message into the database
 */
async function postNewMessage(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const name = req.body.name;
        const message = req.body.message;
        res.status(400).render("form", {
            errors: errors.array(),
            nameText: name,
            messageText: message
        });
    }
    else {
        await db.insertMessage(req.body.name, req.body.message);
        res.redirect("/");
    }
    
}

/**
 * middleware to validate name and message fields, and then post a new message
 */
const newMessagePostController = [
    body("name").trim().notEmpty().withMessage("author name cannot be empty."), 
    body("message").trim().notEmpty().withMessage("message cannot be empty."),
    (req, res) => { postNewMessage(req, res) }
];

/**
 * function that formats a specific date in the format
 * mm.dd.yyyy at hh:mm am/pm (gmt)
 */
function parseDate(date) {
    const values = [date.getMonth() + 1, date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes(), "am"];
    if (values[3] > 12) {
      values[3] -= 12;
      values[5] = "pm";
    }
    for (let i = 0; i < 5; i++) {
      if (values[i] < 10) {
        values[i] = "0" + values[i];
      }
    }
    return `${values[0]}.${values[1]}.${values[2]} at ${values[3]}:${values[4]} ${values[5]} (gmt)`;
}

/**
 * controller function to get the information for a specific message, given an id in req params
 * and render the message
 */
async function viewMessageGetController(req, res) {
    const message = await db.getMessage(req.params.id);
    const added = parseDate(message.added);
    res.render("message", { 
        message: message, 
        added: added
    });
}

module.exports = {
    getAllMessagesController,
    newMessageGetController,
    newMessagePostController, 
    viewMessageGetController
};