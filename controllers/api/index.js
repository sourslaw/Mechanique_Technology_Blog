const router = require('express').Router();

const blogPostRoutes = require('./blogpost-routes');

const userRoutes = require('./user-routes');

const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);

router.use('/blogPost', blogPostRoutes);

router.use('/comment', commentRoutes);

module.exports = router;