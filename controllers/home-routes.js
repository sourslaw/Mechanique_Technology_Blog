const router = require('express').Router();
const { Blogpost, User } = require('../models');
const withAuth = require('../utils/auth');

  
// get all blog posts / HOME route
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogPostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    // Serialize data so the template can read it
    const blogposts = blogPostData.map((blogpost) => blogpost.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('all', { 
      blogposts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// individual blog post route
router.get('/blogpost/:id', async (req, res) => {
  try {
    const blogPostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogpost = blogPostData.get({ plain: true });

    res.render('blogpost', {
      ...blogpost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



// go to create blog post route: cannot go, unless logged in (protected route)
router.get('/createblogpost', withAuth, async (req, res) => {
  console.log('in create post route . . .');

  if (req.session.logged_in) {
    res.render('createblogpost');
    return;
  }

});

// comment routing . . . don't need to go to a page can just be a text box with form submission
router.get('/comment', withAuth, async (req, res) => {
  console.log('in commenting route . . .');

  if (req.session.logged_in) {
    // res.render('createblogpost');
    return;
  }

});


// login route. If the user is already logged in, redirect the request to another route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
