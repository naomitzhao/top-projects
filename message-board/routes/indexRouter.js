const { Router } = require("express");

// default messages
const messages = [
    {
      text: "hello world :3",
      user: "naomi",
      added: new Date("2024-08-13T19:43:01"),
      color: 4, 
    },
    {
      text: "this is the mini message board hehe! let's make this message a bit longer so you have to click it to read the full thing.",
      user: "naomi",
      added: new Date("2024-08-13T19:43:59"), 
      color: 5, 
    }
  ];

const navLinks = [
    { text: "home", href: "/" },
    { text: "new", href: "/new" }
]

const indexRouter = Router();
indexRouter.get("/", (req, res) => res.render("index", { messages: messages, links: navLinks }));
indexRouter.get("/new", (req, res) => res.render("form", { links: navLinks }));
indexRouter.post("/new", (req, res) => {
    messages.push({
        text: req.body.message, 
        user: req.body.authorName, 
        added: new Date(), 
        color: Math.floor(Math.random() * 6),
    });
    res.redirect("/");
});

module.exports = indexRouter;