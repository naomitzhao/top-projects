const { v4: uuid } = require('uuid');
const { Router } = require("express");

// default messages
const messages = [
    {
      id: uuid(),
      text: "hello world :3",
      user: "naomi",
      added: new Date("2024-08-13T19:43:01"),
      color: 4, 
      pinned: true,
    },
    {
      id: uuid(),
      text: "this is the mini message board hehe! let's make this message a bit longer so you have to click it to read the full thing because the message gets pretty long, even if we have a wide card. lots of filler text text text text text text text text text text text text text text text text text text text text text text text",
      user: "naomi",
      added: new Date("2024-08-13T19:43:59"), 
      color: 5, 
      pinned: true,
    }
  ];

const navLinks = [
    { text: "home", href: "/" },
    { text: "new", href: "/new" }
]

const indexRouter = Router();
indexRouter.get("/", (req, res) => res.render("index", { messages: messages, links: navLinks }));
indexRouter.get("/new", (req, res) => res.render("form", { links: navLinks }));
indexRouter.get("/message/:id", (req, res) => res.render("message", { message: getMessage(req.params.id), date: parseDate(getMessage(req.params.id).added) }));

// given a message id, return the message
function getMessage(id) {
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].id == id) {
      return messages[i];
    }
  }
}

function parseDate(date) {
  const values = [date.getMonth() + 1, date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes(), "AM"];
  if (values[3] > 12) {
    values[3] -= 12;
    values[5] = "PM";
  }
  for (let i = 0; i < 5; i++) {
    if (values[i] < 10) {
      values[i] = "0" + values[i];
    }
  }
  return `${values[0]}.${values[1]}.${values[2]} at ${values[3]}:${values[4]} ${values[5]}`;
}

indexRouter.post("/new", (req, res) => {
    messages.push({
        id: uuid(), 
        text: req.body.message, 
        user: req.body.authorName, 
        added: new Date(), 
        color: Math.floor(Math.random() * 5) + 1,
        pinned: false,
    });
    res.redirect("/");
});

module.exports = indexRouter;