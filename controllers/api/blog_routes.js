const router = require('express').Router();
const { Blog } = require('../../models');



router.get('/createBlog', (req, res) => {
    try {
        console.log('inside createBlog GET request');
        res.render("createBlog");
    } catch (error) {
        res.status(500).json(error);
    }

})



router.post('/addBlog', async (req, res) => {
    try {
        console.log('inside addBlog POST request');
            const { title, content } = req.body;
            console.log(title);
            console.log(content);
             const addBlog = await Blog.create({ title: title, content: content, user_id: req.session.user_id })
             if(!addBlog) {
                 res.status(500).json('Couldn\'t add new blog!');
             }
            res.status(200).json(req.body)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

router.get('/deleteBlog', (req, res) => {
    try {
        console.log('inside deleteBlog GET request');
        res.render("deleteBlog");
    } catch (error) {
        res.status(500).json(error)
    }
})



router.post('/deleteBlog', async (req, res) => {
    try {
        const { id } = req.body
        console.log(`Deleting Blog number ${id}`);


        const checkUser = await Blog.findByPk(id);

        console.log(checkUser.user_id)
        console.log(req.session.user_id)

        let checkOwner = (checkUser.user_id === req.session.user_id)

        console.log(checkOwner)
        if(!checkOwner) {
            res.status(500).json('Only the blog creator may delete.')
            return;
        } else {
            console.log('trying to destroy Blog ${id} ')
                const destroyBlog = await Blog.destroy({ where: { id: id } })
                        if(!destroyBlog) {
                            res.status(500).json('Blog could not be deleted.')
                            return;
                        }
        }
        
        res.status(200).json('Successfully deleted.')

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
