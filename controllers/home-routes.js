const router = require('express').Router();
const Blogpost = require('../models/blogPost');

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
          res.status(500).json(err);
      };     
  });

module.exports = router;
