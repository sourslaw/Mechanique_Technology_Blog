const router = require('express').Router();
const Blogpost = require('../models/Blogpost');
const { User } = require('../models');
const withAuth = require('../utils/auth');

// route to get all blog posts
router.get('/', async (req, res) => {
  const blogPostData = await Blogpost.findAll().catch((err) => { 
    res.json(err);
  });
  const blogPosts = blogPostData.map((Blogpost) => Blogpost.get({ plain: true }));
    res.render('all', { blogPosts });
});
  
// route to get one blog post
router.get('/blogpost/:id', async (req, res) => {
  try{ 
    const blogPostData = await Blogpost.findByPk(req.params.id);
  
      if(!blogPostData) {
          res.status(404).json({message: 'No post with this id!'});
        return;
      }
  
    const blogPost = blogPostData.get({ plain: true });
      res.render('blogpost', blogPost);
  
    } catch (err) {
        es.status(500).json(err);
    };     
});

// login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// go to create blog post route
router.get('/createblogpost', (req, res) => {
  console.log('in create post route . . .')
  if (req.session.logged_in) {
    res.render('createblogpost');
    return;
  }

});

// comment routing . . . don't need to go to a page can just be a text box with form submission
router.get('/comment', (req, res) => {

});

module.exports = router;
