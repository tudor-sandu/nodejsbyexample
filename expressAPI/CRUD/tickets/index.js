const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", async (_, res) => {
  try {
    const tickets = await controller.getAll();
    res.send(tickets);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ticket = await controller.getById(req.params.id);
    res.send(ticket);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const ticket = await controller.AddNewTicket(req.body);
    res.send(ticket);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const ticket = await controller.BuyTicket(req.params.id);
    res.send(ticket);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const ticket = await controller.ChangeTicketDetails(
      req.params.id,
      req.body
    );
    res.send(ticket);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
