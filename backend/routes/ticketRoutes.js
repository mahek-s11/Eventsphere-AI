const express = require("express");

const router = express.Router();

const {
  bookTicket,
  getMyTickets,
} = require("../controllers/ticketController");

const {
  protect,
} = require("../middleware/authMiddleware");


// BOOK TICKET
router.post("/book", protect, bookTicket);

// GET MY TICKETS
router.get("/my-tickets", protect, getMyTickets);

module.exports = router;
