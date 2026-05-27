const Ticket = require("../models/Ticket");

const Event = require("../models/Event");

const QRCode = require("qrcode");


// BOOK TICKET
const bookTicket = async (req, res) => {
  try {

    const { eventId } = req.body;

    // Check if event exists
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    // Prevent duplicate booking
    const existingTicket = await Ticket.findOne({
      user: req.user._id,
      event: eventId,
    });

    if (existingTicket) {
      return res.status(400).json({
        message: "Ticket already booked",
      });
    }

    // Create ticket
    const ticket = await Ticket.create({
      user: req.user._id,
      event: eventId,
    });

    // QR Data
    const qrData = JSON.stringify({
      ticketId: ticket._id,
      userId: req.user._id,
      eventId: eventId,
    });

    // Generate QR Code
    const qrCodeImage = await QRCode.toDataURL(qrData);

    // Save QR code into ticket
    ticket.qrCode = qrCodeImage;

    await ticket.save();

    res.status(201).json({
      message: "Ticket booked successfully",
      ticket,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// GET MY TICKETS
const getMyTickets = async (req, res) => {
  try {

    const tickets = await Ticket.find({
      user: req.user._id,
    })
      .populate("event")
      .populate("user", "name email");

    res.json(tickets);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


module.exports = {
  bookTicket,
  getMyTickets,
};
