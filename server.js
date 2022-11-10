const express = require('express'),
app = express(),
expressLayout = require('express-ejs-layouts'),
PORT = process.env.PORT || 3000,
cryptoJS = require('crypto-js'),
db = require('./models'),
cookieParser = require('cookie-parser'),
flash = require('express-flash'),
session = require('express-session'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
Emitter = require('events')


app.use(cookieParser())

const eventEmitter = new Emitter()
app.set('eventEmitter', eventEmitter)

app.use(session({ cookie: { maxAge: 900000 }, //15min  
    secret: 'SECSECRET',
    resave: false, 
    saveUninitialized: false
}));

app.use(flash());

app.use((req, res, next) => {
    res.locals.session = req.session
    res.locals.user = req.user
    res.locals.message = req.flash();
    next()
})

app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(expressLayout)
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(bodyParser.json())

app.use(async (req, res, next)=>{
    if(req.cookies.userId) {
        const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.SECRET)
        const decryptedIdString = decryptedId.toString(cryptoJS.enc.Utf8)
        const user = await db.user.findByPk(decryptedIdString)
        res.locals.user = user;
        res.locals.userId = user.id;
    } else res.locals.user = null
    next()
})

app.use('/', require('./controllers/index'));
app.use('/users', require('./controllers/users'))
app.use('/cart', require('./controllers/customer/cart'))
app.use('/customer', require('./controllers/customer/orders'))
app.use('/restaurant/orders', require('./controllers/restaurant/orders') )

app.get('/', (req, res)=>{
    res.render('home')
})

app.use((req, res) => {
    res.status(404)
       .send('<img src="/images/404.gif" style=" display: block; margin-left: auto; margin-right: auto;width: 50%;">')
})


// Socket

const io = require('socket.io')(app.listen(PORT , () => { console.log(`Hello from 🇧🇭 on port ${PORT}`),{ cors: { origin: "*" }}
}))
io.on('connection', (socket) => {
      // Join
      socket.on('join', (orderId) => {
        socket.join(orderId)
        console.log("ORDER ID IS " + orderId)
      })
})

eventEmitter.on('orderUpdated', (data) => {
    io.to(`order${data.id}`).emit('orderUpdated', data)

    console.log("DATA IS " , data)
    console.log("IO.TO is " , `${data.id}`)
})

eventEmitter.on('orderPlaced', (data) => {
    // console.log("THE DATA IN EVENT EMITTER SERVER FILE IS " , data)
    io.to('restaurantRoom').emit('orderPlaced', data)
})

