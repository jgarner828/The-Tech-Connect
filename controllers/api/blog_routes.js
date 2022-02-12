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
             const addBlog = await Blog.create({ title: title, content: content })
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



router.post('/deleteBlog', (req, res) => {
    try {
        console.log('inside deleteBlog POST request');
        const { id } = req.body
        console.log(`Deleting Blog number ${id}`);
        const destroyBlog = Blog.destroy({ where: { id: id } })
        if(!destroyBlog) {
            res.status(500).json('Blog could not be deleted.')
        }
        res.status(200).json('Successfully deleted.')

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
