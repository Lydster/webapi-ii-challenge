//initialize server

const express = require("express");
const postRouter = require(`./data/post-router.js`);
const server = express();

//middleware
server.use(express.json());

//route
server.use("/api/posts", postRouter);

//sanity
server.get("/", (req, res) => {
  res.send("server running...");
});

//exports
module.exports = server;
