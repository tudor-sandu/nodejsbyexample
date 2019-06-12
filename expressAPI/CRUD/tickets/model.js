const { db } = require("../db");
module.exports = {
  getAll: () => db.any("SELECT * FROM tickets"),
  getById: (id) => db.oneOrNone(`SELECT * FROM tickets WHERE id=${id}`)
//   BuyTicket,
//   AddNewTicket,
//   ChangeTicketDetails
};
