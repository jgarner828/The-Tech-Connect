const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {

    let allBlogPosts = await Blog.findAll({
      include: {
        model: User,
        attributes: { exclude: ["password"] },
      },
    });
    let mappedBlogPosts = await allBlogPosts.map((blog) => {
      return blog.get({ plain: true });
    });


    let allComments = await Comment.findAll();
    console.log(allComments);


    res.render("homepage", { mappedBlogPosts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
