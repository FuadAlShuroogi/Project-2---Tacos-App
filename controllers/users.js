const express = require('express')
const db = require('../models')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')

router.get('/register', (req, res)=>{
    res.render('users/register.ejs')
})

router.get('/login', (req, res)=>{
    console.log("fuad")
    res.render('users/login.ejs')
})

router.post('/register', async (req, res)=>{
    const [newUser, created] = await db.user.findOrCreate({where:{name:req.body.name, email: req.body.email}})
    if(!created){
        req.flash('error', 'Looks like you already have an account! Try logging in :)')
        res.render('users/register')
    } else {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        newUser.password = hashedPassword
        await newUser.save()
        const encryptedUserId = cryptojs.AES.encrypt(newUser.id.toString(), process.env.SECRET)
        const encryptedUserIdString = encryptedUserId.toString()
        res.cookie('userId', encryptedUserIdString)
        res.redirect('/')
    }
})

router.post('/login',async (req, res)=>{
    const user = await db.user.findOne({where: {email: req.body.email}})
    if(!user){
        req.flash('error', 'User not found!')
        res.render('users/login')
    } else if(!bcrypt.compareSync(req.body.password, user.password)) {
        req.flash('error', 'Invalid email/password!')
        res.render('users/login')
    } else {
        console.log('logging in the user!!!')
        const encryptedUserId = cryptojs.AES.encrypt(user.id.toString(), process.env.SECRET)
        const encryptedUserIdString = encryptedUserId.toString()
        req.session.loggedin = true
        res.cookie('userId', encryptedUserIdString)
        res.redirect('/')
    }
})



module.exports = router