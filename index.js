const express = require("express");
const server = require("./api/server.js");

const router = require("./api/accounts/accounts-router.js");

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});

server.use(express.json());

server.use("/api/accounts", router);
