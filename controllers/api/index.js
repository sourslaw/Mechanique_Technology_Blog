const router = require('express').Router();

const blogPostRoutes = require('./blogpost-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');

router.use('/blogPost', blogPostRoutes);
router.use('/comment', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
