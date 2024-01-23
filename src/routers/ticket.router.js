const express = require("express");
const { createTicket } = require("../controllers/ticket.controller");

const router = express.Router();

router.post("/screen/:id", createTicket);

module.exports = router;
