const sequelize = require('../config/connection');

const seedBlogpost = require('./blogData');
const seedUser = require('./userData');
const seedComment = require('./commentData');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

//   await seedBlogpost();

//   await seedUser();

  await seedComment();

  process.exit(0);
};

seedDatabase();
