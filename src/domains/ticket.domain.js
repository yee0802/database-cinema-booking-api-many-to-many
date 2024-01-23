const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");

async function createTicketDb(request_body, seatId) {
  const { customerId, screeningId } = request_body;

  const createdTicket = await prisma.ticket.create({
    data: {
      screening: {
        connect: {
          id: Number(screeningId),
        },
      },
      customer: {
        connect: {
          id: Number(customerId),
        },
      },
      seats: {
        connect: [{ id: seatId }],
      },
    },
    include: {
      screening: {
        include: {
          movie: true,
        },
      },
      seats: true,
      customer: true,
    },
  });

  return createdTicket;
}

module.exports = {
  createTicketDb,
};
