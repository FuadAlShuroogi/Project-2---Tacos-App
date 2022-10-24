const express = require('express'),
router = express.Router(),
db = require('../models')

router.get('/', async(req,res) => {
    
    res.render('customers/cart')
    
})



module.exports = router;