const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);

module.exports = knex;

/*knex('users').insert({
	name: 'Teste',
	email: 'teste@teste.com.br',
	password: 'Teste'
}).then(data => console.log(data))*/

knex('users').select('*').then(resultado => console.log(resultado));