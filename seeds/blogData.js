const { Blogpost } = require('../models');


const blogpostData = [
	{
		post_title: "French Bread with Brie Cheese as tech",
		content: "I wish i could live inside a warm loaf of French bread, The scent fusing all around me, A fresh smell that also gives you the satisfaction of feeling whole. As I walk down the brick path and witness the busy streets, I cannot help but stop and admire the difference between the countryside and the city",
		username: "Ivan"
	},
	{
		post_title: "Isa is making this weird",
		content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
		username: "Isa"
	},
	{
		post_title: ".js with Brie Cheese",
		content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
		username: "Carlos"
	}
];
  
  
const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogpost;