const { User } = require('../models');


const userData = [
	{
		username: "Ivan",
		email: "ivan@me.com",
		password: "password1234"
	},
	{
		username: "Isa",
		email: "isa@aol.com",
		password: "password1234"
	},
	{
		username: "Carlos",
		email: "carlos@me.com",
		password: "password1234"
	}
];
  
  
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;