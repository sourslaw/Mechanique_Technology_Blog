const router = require('express').Router();

const blogPostRoutes = require('./blogpost-routes');

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

router.use('/blogPost', blogPostRoutes);

module.exports = router;