const router = require('express').Router();
const blogPost = require('../models/blogPost');

// route to get all blog posts
router.get('/', async (req, res) => {

    const blogPostData = await blogPost.findAll().catch((err) => { 
		res.json(err);
		
	  });
	  
        const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
        res.render('all', { blogPosts });
      });
  
  // route to get one blog post
  router.get('/blogpost/:id', async (req, res) => {
    try{ 
		const blogPostData = await blogPost.findByPk(req.params.id);
		
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
