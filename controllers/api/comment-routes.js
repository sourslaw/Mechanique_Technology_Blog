const router = require('express').Router();
const { User, Blogpost, Comment } = require('../../models');


// GET all comments posts (backend request), '/api/comment
router.get('/', async (req,res) => {
	try {
		const commentData = await Comment.findAll( { include: [ {model: User}, {model: Blogpost} ] } );

		res.status(200).json(commentData);
		
	} catch (err) {
		res.status(500).json(err);
	}
});



// route to create/add a post: '/api/comment'
router.post('/', async (req, res) => {
	try {
	const commentData = await Comment.create({
		content: req.body.content,
		user_id: req.session.user_id,
		blogpost_id: req.body.bpIdent,

	});

	res.status(200).json(commentData);

	} catch (err) {
		res.status(400).json(err);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const commentData = await Comment.update(
			{
				content: req.body.content,
				user_id: req.body.user_id,
				blogpost_id: req.body.blogpost_id,
			},
			{
			where: {
				id: req.params.id,
			},
		}
	);

	res.status(200).json(commentData);

	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', async (req, res) => {
	try { // delete one product by its `id` value
		const commentData = await Comment.destroy({
			where: {
			id: req.params.id
			}
		});

		if (!tagData) {
			res.status(404).json({ message: 'No post found with this id!' });
			return;
		}

		res.status(200).json(commentData);

	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;