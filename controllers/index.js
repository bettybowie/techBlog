const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', dashboardRoutes);
router.use('/', commentRoutes);

module.exports = router;
