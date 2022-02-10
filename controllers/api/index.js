const router = require('express').Router();

const userRoutes = require('./user_routes');
const blogRoutes = require('./blog_routes');

router.use('/user', userRoutes);
router.use('/blog', blogRoutes)

module.exports = router;
