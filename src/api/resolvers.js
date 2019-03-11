const db = require('../config/database')
const axios = require('axios');

module.exports = {
	Query: {
		async getUser(_, { id }) {
			return await db('users').where({ id }).first()
		},

		async getUsers() {
			return await db('users')
		},

		async getScientists() {
			const response = await axios.get('https://in-memorian.herokuapp.com/scientists')
			return response.data;
		},

		async getAll() {
			const response = await axios.get('http://cloud.desencalhei.mangotest.com/DesencalheiWs/rs/category/listActives')
			return response.data.data;
		},

		async getHome() {
			const response = await axios.get('http://cloud.desencalhei.mangotest.com/DesencalheiWs/rs/home/getHome')
			return response.data.data
		}
	},

	Mutation: {
		async createUser(_, { input }) {
			const result = await db('users').insert({
				name: input.name,
				email: input.email,
				password: input.password
			})

			const id = result[0]

			return await db('users').where({ id }).first()
		}
	}
}