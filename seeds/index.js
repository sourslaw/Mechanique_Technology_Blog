const sequelize = require('../config/connection');
const seedBlogpost = require('./blogData');
const seedUser = require('./userData');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedBlogpost();

  await seedUser();

  process.exit(0);
};

seedDatabase();
