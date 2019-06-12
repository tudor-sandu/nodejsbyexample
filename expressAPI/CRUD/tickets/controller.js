const model = require("./model");
module.exports = {
  getAll: () => model.getAll(),
  getById: id => model.getById(id)
  //   BuyTicket,
  //   AddNewTicket,
  //   ChangeTicketDetails
};
