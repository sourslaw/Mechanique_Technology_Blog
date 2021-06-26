const router = require('express').Router();

const blogPostRoutes = require('./blogPost-routes');

router.use('/blogPost', blogPostRoutes);

module.exports = router;