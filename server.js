const express = require('express'),
app = express(),
expressLayout = require('express-ejs-layouts'),
PORT = process.env.PORT || 3000,
cryptoJS = require('crypto-js'),
db = require('./models'),
cookieParser = require('cookie-parser'),
flash = require('express-flash'),
session = require('express-session')


app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'SECMNB',
    resave: false, 
    saveUninitialized: false,

}));

app.use((req, res, next) => {
        res.locals.session = req.session
        res.locals.user = req.user
        next()
})


app.use(flash());
app.use(express.static('public'))
app.use(expressLayout)
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')

app.use(async (req, res, next)=>{
    if(req.cookies.userId) {
        const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.SECRET)
        const decryptedIdString = decryptedId.toString(cryptoJS.enc.Utf8)
        const user = await db.user.findByPk(decryptedIdString)
        res.locals.user = user
    } else res.locals.user = null
    next()
})

app.use('/', require('./controllers/main'));
app.use('/users', require('./controllers/users'))
app.use('/cart', require('./controllers/cart'))


app.get('/', (req, res)=>{
    res.render('home')
})

app.use((req, res) => {
    res.status(404)
       .send('<img src="/images/404.gif" style=" display: block; margin-left: auto; margin-right: auto;width: 50%;">')
})


 

app.listen(PORT , () => { console.log(`Listening on port ${PORT}`)})
