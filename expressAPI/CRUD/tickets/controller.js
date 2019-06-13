const model = require("./model");
module.exports = {
  getAll: () => model.getAll(),
  getById: id => model.getById(id),
  BuyTicket: id => model.BuyTicket(id),
  AddNewTicket: ticket => model.AddNewTicket(ticket),
  ChangeTicketDetails: (id, ticket) => model.ChangeTicketDetails(id, ticket)
};
