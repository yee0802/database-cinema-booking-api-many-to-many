const express = require("express");
const {
  getSeatsByScreen,
  getAllScreens,
} = require("../controllers/screens.controller");

const router = express.Router();

router.get("/", getAllScreens);

router.get("/:id/seats", getSeatsByScreen);

module.exports = router;
