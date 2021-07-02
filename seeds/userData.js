const { User } = require('../models');


const userData = [
	{
		id: 1,
		username: "Ivan",
		email: "ivan@me.com",
		password: "password1234"
	},
	{
		id: 2,
		username: "Isa",
		email: "isa@aol.com",
		password: "password1234"
	},
	{
		id: 3,
		username: "Carlos",
		email: "carlos@me.com",
		password: "password1234"
	}
];
  
  
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;