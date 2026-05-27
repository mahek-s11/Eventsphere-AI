const Event = require("../models/Event");


// CREATE EVENT
const createEvent = async (req, res) => {
  try {

    const {
      title,
      description,
      category,
      date,
      location,
      price,
      image,
    } = req.body;

    const event = await Event.create({
      title,
      description,
      category,
      date,
      location,
      price,
      image,
      organizer: req.user._id,
    });

    res.status(201).json(event);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// GET ALL EVENTS
const getAllEvents = async (req, res) => {
  try {

    const events = await Event.find()
      .populate("organizer", "name email");

    res.json(events);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// GET SINGLE EVENT
const getSingleEvent = async (req, res) => {
  try {

    const event = await Event.findById(req.params.id)
      .populate("organizer", "name email");

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.json(event);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// UPDATE EVENT
const updateEvent = async (req, res) => {
  try {

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    // Only creator can update
    if (
      event.organizer.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedEvent);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// DELETE EVENT
const deleteEvent = async (req, res) => {
  try {

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    // Only creator can delete
    if (
      event.organizer.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    await event.deleteOne();

    res.json({
      message: "Event deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
