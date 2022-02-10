const router = require('express').Router();
const { User } = require('../../models');



// router.post login
// log out
//  create new user

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router;
