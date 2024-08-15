// import path commonjs module
const path = require("node:path");

// import express and initialize app
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middleware that parses form data into req.body
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// our main router for this site
const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

const PORT = process.env.port || 3000;
app.listen(PORT);