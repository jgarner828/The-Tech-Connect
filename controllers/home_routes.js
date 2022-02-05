const router = require('express').Router();

const { ModelName } = require('../../models');

router.get('/', async (req, res) => {
    try {
        res.status(200).json('success')
    } catch (err) {
        res.status(400).json(err);
    }
            
})

module.exports = router;
