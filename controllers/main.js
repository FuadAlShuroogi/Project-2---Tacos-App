const express = require('express'),
router = express.Router(),
db = require('../models')

router.get('/', async(req,res) => {
   res.render('home')
})

router.get('/menu', async(req,res) => {
   const tacos = await db.menu.findAll()
   res.render('menu', { tacos: tacos })
})

router.get('/login', (req,res) => {
  if(req.session.loggedin === true || req.session.loggedin === 'undefined'){
   res.redirect('/')
  }else{
   res.render('users/login')
  }
})

router.post('/logout', (req, res)=>{
   req.session.loggedin = false
   res.clearCookie('userId')
   res.redirect('/')
})

router.get('/logout', (req, res)=>{
   res.redirect('/')
})
  
router.get('/register', async(req,res) => {
res.render('users/register')
})


module.exports = router;