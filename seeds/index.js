const sequelize = require('../config/connection');
const blogPost = require('../models/blogPost');
const blogPostData = require('./blog_db-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await blogPost.bulkCreate(blogPostData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
