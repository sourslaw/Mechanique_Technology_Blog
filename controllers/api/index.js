const router = require('express').Router();

const blogpostRoutes = require('./blogpost-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');

router.use('/blogpost', blogpostRoutes);
router.use('/comment', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;