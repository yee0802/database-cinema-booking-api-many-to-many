const {
  getSeatsByScreenDb,
  getAllScreensDb,
} = require("../domains/screens.domain");

async function getAllScreens(req, res) {
  const allScreens = await getAllScreensDb();

  return res.status(200).send({ screens: allScreens });
}

async function getSeatsByScreen(req, res) {
  try {
    const screenId = Number(req.params.id);

    const foundSeats = await getSeatsByScreenDb(screenId);

    if (!foundSeats) {
      return res
        .status(404)
        .send({ error: "No seats found with provided screen ID" });
    }

    return res.status(200).send({ seats: foundSeats });
  } catch (e) {
    return res.status(e.status ?? 500).send({ error: e.message });
  }
}

module.exports = {
  getAllScreens,
  getSeatsByScreen,
};
