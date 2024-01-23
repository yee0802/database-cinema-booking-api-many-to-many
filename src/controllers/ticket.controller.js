const { createTicketDb } = require("../domains/ticket.domain");
const { getSeatsByScreenDb } = require("../domains/screens.domain");

async function createTicket(req, res) {
  try {
    const { customerId, screeningId, seatRow, seatNumber } = req.body;

    const screenId = Number(req.params.id);

    if (!customerId || !screeningId) {
      return res.status(400).send({ error: "Missing fields in request body" });
    } else if (!screenId) {
      return res.status(400).send({ error: "No provided screen ID" });
    }

    const seats = await getSeatsByScreenDb(screenId);

    if (!seats) {
      return res
        .status(404)
        .send({ error: "No seats found with provided screen ID" });
    }

    const seat = seats.find(
      (seat) =>
        seat.seatRow === seatRow && seat.seatNumber === Number(seatNumber)
    );

    if (!seat) {
      return res
        .status(404)
        .send({ error: "No seat with provided row & number" });
    }

    const seatId = seat.id;

    const createdTicket = await createTicketDb(req.body, seatId);

    return res.status(201).send({ ticket: createdTicket });
  } catch (e) {
    return res.status(e.status ?? 500).send({ error: e.message });
  }
}

module.exports = {
  createTicket,
};
