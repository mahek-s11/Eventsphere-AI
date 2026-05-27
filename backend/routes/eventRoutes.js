const express = require("express");

const router = express.Router();

const {
  createEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const {
  protect,
  organizerOnly,
} = require("../middleware/authMiddleware");


// CREATE EVENT
router.post(
  "/",
  protect,
  organizerOnly,
  createEvent
);

// GET ALL EVENTS
router.get("/", getAllEvents);

// GET SINGLE EVENT
router.get("/:id", getSingleEvent);

// UPDATE EVENT
router.put(
  "/:id",
  protect,
  organizerOnly,
  updateEvent
);

// DELETE EVENT
router.delete(
  "/:id",
  protect,
  organizerOnly,
  deleteEvent
);

module.exports = router;

