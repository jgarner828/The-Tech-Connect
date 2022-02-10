const router = require('express').Router();
const { User } = require('../../models');



// router.post login
// log out
//  create new user

router.post('/login', (req, res) => {
    try {
        if(req.body.email && req.body.password) {
            const { email, password } = req.body;
            console.log(email);
            console.log(password);
        }


        res.render('login')
    } catch (error) {
        res.status(500).json(error);
    }
    
})

module.exports = router;
