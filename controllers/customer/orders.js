const express = require('express'),
router = express.Router(),
moment = require('moment'),
db = require('../../models'),
QueryTypes = require('sequelize');

router.get('/orders', async(req, res) => {

  let userOrders = await res.locals.user.getOrders()

    res.header('Cache-Control', 'no-store')
    res.render('customer/orders', { orders: userOrders , moment: moment })

})

// router.get('/customer/orders', async(req,res)=> {

//     const orders = await db.order.findAll({
//       order: [['createdAt', 'DESC']]
//     });

//     res.header('Cache-Control', 'no-store')
//     res.render('customer/orders', { orders: orders , moment: moment })

// })

// router.post('/customer/orders', async(req,res)=> {

//     const { phone, address, paymentType } = req.body
    
//     if(phone == '' || address == '') {
//         req.flash('error', 'All fields are required!')
//         res.render('customer/cart')
//     }    
//             else{
    
//             db.order.create({
//                 // customerId: req.locals.userID,
//                 userId: res.locals.userID,
//                 items: req.session.cart.items,
//                 phone,
//                 address,
//                 paymentType : paymentType
//               }).then(async result => {
//                 req.flash('success', 'Order placed successfully')
//                 delete req.session.cart
//                 let user = res.locals.userID
                
//                 const orders = await db.order.findAll({
//                     where: {
//                     customerId : user
//                   }, order: [['createdAt', 'DESC']]
//                   })
    
//         res.header('Cache-Control', 'no-store')
//         res.render('customer/orders', { orders: orders , moment: moment })
    
//               })
//             }  
// })

router.post('/orders', async (req, res, next) => {

const { phone, address, paymentType } = req.body

if(phone == '' || address == '') {
    req.flash('error', 'All fields are required!')
    res.render('customer/cart')
}

        else{

          let user = res.locals.userId

let newOrder = 
        db.order.create({
            userId: user,
            items: req.session.cart.items,
            phone,
            address,
            paymentType : paymentType
          }).then(async result => {
            req.flash('success', 'Order placed successfully')
            delete req.session.cart

            console.log(newOrder)
          
            const orders = await db.order.findAll({
                where: {
                  userId : user
              }, order: [['createdAt', 'DESC']]
              })

    res.header('Cache-Control', 'no-store')
    res.render('customer/orders', { orders: orders , moment: moment })
    
          })
        }       
        });
    
    router.get('/orders/:id' , async (req, res) =>{
        const order = await db.order.findByPk(req.params.id);

        res.render('customer/singleOrder', { order })      
    } )

    module.exports = router;