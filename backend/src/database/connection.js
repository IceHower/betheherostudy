const knex = require('knex');
const configuration = require('../../knexfile')
const connection = knex(configuration.development); // cria a conexão baseada no arquivo de configuração.

module.exports = connection;