const router = require('express').Router();
const { Blogpost, User, Comment } = require('../models');
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

// render ind. post W/ comments
router.get('/blogpost/:id', async (req, res) => {
	try {
	//   const blogPostData = await Blogpost.findByPk(req.params.id, {
	// 	include: [ { model: Comment, }, { model: User, }],
	//   });

	// test eager loading
	const blogPostData = await Blogpost.findByPk(req.params.id, { include: { all: true, nested: true }});
  
	  const blogpost = blogPostData.get({ plain: true });

	  console.log(blogpost);
  
	  res.render('blogpost', { ...blogpost, logged_in: req.session.logged_in });

	} catch (err) {
	  res.status(500).json(err);
	}
  });

// new createpost route (also, user's profile route). Use withAuth middleware to prevent access to route
router.get('/createblogpost', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blogpost }],
    });

    const user = userData.get({ plain: true });

    res.render('createblogpost', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
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
