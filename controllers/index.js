// const router = require('express').Router();

// const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes.js');

// router.use('/api', apiRoutes);
// router.use('/', homeRoutes);

// module.exports = router;

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

const blogpostRoutes = require('./blogpost-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');

router.use('/blogpost', blogpostRoutes);
router.use('/comment', commentRoutes);
router.use('/users', userRoutes);

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;