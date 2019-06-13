const { db } = require("../db");
module.exports = {
  getAll: () => db.any("SELECT * FROM tickets"),
  getById: id => db.oneOrNone(`SELECT * FROM tickets WHERE id=${id}`),
  BuyTicket: id => db.one(`DELETE FROM tickets WHERE id=${id} RETURNING *`),
  AddNewTicket: ticket =>
    db.one("INSERT INTO tickets(name) VALUES (${ticket.name}) RETURNING *", {
      ticket
    }),
  ChangeTicketDetails: (id, ticket) =>
    db.oneOrNone(
      "UPDATE tickets SET name=${ticket.name} WHERE id=${id} RETURNING *",
      {
        ticket,
        id
      }
    )
};
