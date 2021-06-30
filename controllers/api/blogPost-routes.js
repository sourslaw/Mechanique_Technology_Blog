const router = require('express').Router();
const { User, Blogpost } = require('../../models');
const withAuth = require('../../utils/auth');


// GET all blog posts (backend request)
router.get('/', async (req,res) => {
  try {
    const blogpostData = await Blogpost.findAll( { include: [{model: User}] } );
  
    res.status(200).json(blogpostData);
    
    } catch (err) {
      res.status(500).json(err);
    }
});

// route to create/add a post: '/api/blogpost'
router.post('/', async (req, res) => {
  console.log('you are in teh blog posting route')
  try {
    const blogPostData = await Blogpost.create({
      post_title: req.body.post_title,
      content: req.body.content,
      user_id: req.session.user_id, // req.session as opposed to req.body
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
    user_id: req.body.user_id,
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

// individual post delete route
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogPostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogPostData) {
      res.status(404).json({ message: 'No ppost found with this id!' });
      return;
    }

    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
