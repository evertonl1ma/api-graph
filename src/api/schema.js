const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');

const usersAttribs = `
	id: ID
	name: String
	email: String
	password: String
`

const typeDefs = `
	type User {
		${usersAttribs}
	}
	
	type Scientist {
		id: ID
		nome: String
		src: String
		dados: [String!]!
	}
	
	type Menu {
		id: ID
		idParent: String
		last: Boolean
		name: String
	}
	
	type subCategories {
		id: ID
		name: String
		idParent: String
		last: Boolean
		status: String
		subCategories: String
	}

	type Category {
		id: ID
		name: String
		idParent: String
		last: Boolean
		status: String
		subCategories: [subCategories!]!
	}
	
	type Brand {
		id: ID
		name: String
	}
	
	type subCategory {
		id: ID
		name: String
	}
	
	type saleOff {
		id: ID
		idProduct: String
		idObj: String
		title: String
		priceBefore: String
		priceNow: String
		discountPercentage: String
		discount: String
		expireDate: String
		avaliable: String
	}
	
	type addressInfo {
		address: String
		street: String
		String: String
		complement: String
		reference: String
		district: String
		city: String
		state: String
		zipCode: String
		country: String
		latitude: String
		longitude: String
		idObj: String
	}
	
	type gallery {
		id: String
	}

	type listSaleOff {
		id: ID
		idObj: String
		typeObj: String
		nameObj: String
		barcode: String
		featured: String
		views: String
		rating: String
		salesCount: String
		colorImage: String
		likes: String
		maxPlots: String
		fgNew: Boolean
		languageUser: String
		status: String
		condition: String
		deliveryFee: String
		deliveryFreeRange: String
		name: String
		desc: String
		blockingReason: String
		category: Category
		subCategory: subCategory
		brand: Brand
		price: String
		creationDate: String
		saleOff: saleOff
		listSize: [String!]
		addressInfo: addressInfo
		images: [String!]
		models: [String!]
		info: [String!]
		options: [String!]
		gallery: [gallery!]
		lang2: String
		distance: String
		fgFavorite: String
		productInfo: String
	}
	
	type listCategories {
		id: ID
		name: String
		idParent: String
		last: Boolean
		status: String
		subCategories: [subCategories!]!
	}
	
	type listFeatured {
		id: ID
		idObj: String
		typeObj: String
		nameObj: String
		barcode: String
		featured: String
		views: String
		rating: String
		salesCount: String
		colorImage: String
		likes: String
		maxPlots: String
		fgNew: Boolean
		languageUser: String
		status: String
		condition: String
		deliveryFee: String
		deliveryFreeRange: String
		name: String
		desc: String
		blockingReason: String
		category: Category
		subCategory: subCategory
		brand: Brand
		price: String
		creationDate: String
		saleOff: saleOff
		listSize: [String!]
		addressInfo: addressInfo
		images: [String!]
		models: [String!]
		info: [String!]
		options: [String!]
		gallery: [gallery!]
		lang2: String
		distance: String
		fgFavorite: String
		productInfo: String
	}

	type Home {
		listSaleOff: [listSaleOff!]!
		listCategories: [listCategories!]!
		listFeatured: [listFeatured!]!
		idGoogleAdsense: String
	}

	type Query {
		getUser(id: ID!): User
		getUsers: [User!]!
		getScientists: [Scientist!]!
		getAll: [Menu!]!
		getHome: Home
		getlistSaleOff: [listSaleOff!]!
	}

	input UserInput {
		${usersAttribs}
	}

	type Mutation {
		createUser(input: UserInput): User
	}
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })