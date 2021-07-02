const { Comment } = require('../models');


const commentData = [
	{
		content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		blogpost_id: "1",
	},
	{
		content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		blogpost_id: "1",
	},
	{
		content: "Lorem Ipsum is Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		blogpost_id: "2",
	},
    {
		content: "Lorem Ipsum is Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		blogpost_id: "2",
	},
    {
		content: "Lorem Ipsum is Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		blogpost_id: "3",
	},
];
  
  
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;