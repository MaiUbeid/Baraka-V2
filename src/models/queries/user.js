const connection = require('../config/connection');

const insert = userData => {
  const { username, password, email } = userData;
  const sql = {
    text: 'INSERT INTO baraka_user (username, password, email) VALUES ($1, $2, $3);',
    values: [username, password, email]
  };
  return connection.query(sql);
};

const selectAll = () => {
  const sql = 'SELECT * from baraka_user ;';
  return connection.query(sql);
};

const find = id => {
  const sql = {
    text: 'SELECT username FROM baraka_user WHERE baraka_user.id LIKE $1;',
    values: [id]
  };
  return connection.query(sql);
};

module.exports = { insert, selectAll, find };