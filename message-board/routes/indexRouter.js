const { Router } = require("express");
const { getAllMessagesController, newMessageGetController, newMessagePostController, viewMessageGetController } = require('../controllers/messagesController');

const indexRouter = Router();
indexRouter.get("/", (req, res) => getAllMessagesController(req, res));
indexRouter.get("/new", (req, res) => newMessageGetController(req, res));
indexRouter.post("/new", (req, res) => newMessagePostController(req, res));
indexRouter.get("/message/:id", (req, res) => viewMessageGetController(req, res));

module.exports = indexRouter;