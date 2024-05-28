import knex from 'knex';
import knexConfig from '../config/config.js';

let conn;

function conectar() {
  if (conn) {
    return conn;
  }

  conn = knex(knexConfig);
  return conn;
}

export default conectar();
