// We only need to initialize the database only once
const pgp = require('pg-promise')({
  capSQL: true
});
const connection = require('./pgpInitialization');
const db = pgp(connection);

module.exports = {
  pgp,
  db
};
