import { Knex } from 'knex';
import knex from 'knex';
import knexConfig from '../config/database.js';

export default class KnexService{
  private static conn: Knex;

  obterConexao = () => {
    if(!KnexService.conn){
      KnexService.conn = knex(knexConfig);
    }
    return KnexService.conn;
  }
}
