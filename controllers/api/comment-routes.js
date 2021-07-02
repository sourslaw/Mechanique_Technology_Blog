const router = require('express').Router();
const Comment = require('../../models/Comment');

// route to create/add a post
// '/api/comment'
router.post('/', async (req, res) => {

  console.log('you are in teh commentiing route');
  console.log(req.body)
  // console.log(req.session)

  try {
    const commentData = await Comment.create({
      content: req.body.content,
      blogpost_id: req.body.blogpost_id,
      user_id: req.body.user_id,

      // user_id: req.session.user_id,
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
  // delete one product by its `id` value
  try {
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
