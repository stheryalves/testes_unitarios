import knex from '../../service/knex.js';

const getAll = async () => {
  return knex('produtos').select();
};

const store = async (params) => {
  return knex('produtos').insert(params);
};

export default {
  getAll,
  store,
};
