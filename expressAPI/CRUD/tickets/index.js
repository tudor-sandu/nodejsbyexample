const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", async (_, res) => {
  try {
    const tickets = await controller.getAll();
    res.send(tickets);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ticket = await controller.getById(req.params.id);
    res.send(ticket);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
