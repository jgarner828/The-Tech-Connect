const router = require('express').Router();
const { User, Blog } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {


    let allBlogPosts = await Blog.findAll({ include: { model: User, attributes: { exclude: ['password']}} });
    let mappedBlogPosts = allBlogPosts.map(blog => {
      return blog.get({ plain: true });
    })

    console.log(mappedBlogPosts)

    res.render('homepage', {mappedBlogPosts})
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

