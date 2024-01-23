const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");

async function getAllScreensDb() {
  const allSeats = await prisma.screen.findMany({
    include: { seats: true },
  });

  return allSeats;
}

async function getSeatsByScreenDb(screenId) {
  const foundSeats = await prisma.seat.findMany({
    where: { screenId },
  });

  return foundSeats;
}

module.exports = {
  getAllScreensDb,
  getSeatsByScreenDb,
};
