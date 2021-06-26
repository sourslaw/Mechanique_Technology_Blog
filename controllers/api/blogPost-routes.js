const router = require('express').Router();
const Dish = require('../../models/blogPost');

// route to create/add a post
router.post('/', async (req, res) => {
  try {
    const blogPostData = await blogPostData.create({
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
    const blogPostData = await blogPostData.update(
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
    res.status(200).json(blogPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
