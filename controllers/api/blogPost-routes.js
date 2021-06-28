const router = require('express').Router();
const Blogpost = require('../../models/blogPost');

// route to create/add a post
// '/api/blogpost'
router.post('/', async (req, res) => {
  console.log('you are in teh posting route')
  try {
    const blogPostData = await Blogpost.create({
      post_title: req.body.post_title,
      content: req.body.content,
      creator_name: req.body.creator_name,
    });
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  try {
    const blogPostData = await Blogpost.update(
      {
		post_title: req.body.post_title,
		content: req.body.content,
		creator_name: req.body.creator_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const blogPostData = await Blogpost.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
