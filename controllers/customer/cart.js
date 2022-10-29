const express = require('express'),
router = express.Router(),
{ json } = require("express")


//<-- Need to work on it later -->

// router.post('/delete-cart', async(req,res) => {

//     for(key in req.session.cart) {
//         if(req.session.cart.hasOwnProperty(key)) {
//             var value = req.session.cart[key];
//             // console.log(value)
//         }
//     }

//     // console.log("cart: " + req.session.cart.values + ",itemID: " + req.body.itemId);


// // const tacoId = req.body.itemId;

// // let cart = req.session.cart;
// // console.log(cart)

// // cart.items[tacoId] = {
    
// // }
// // cart.totalQty = 0
// // cart.totalPrice = 0
// // console.log("DELETED")
// // console.log("AFTER")
// // console.log(cart)

// // return res.json({ totalQty: req.session.cart.totalQty })

// // res.redirect('/cart')

// })
// router.get('/delete-cart', function(req, res, next) {
//     console.log("WHERE AM I ?")

//     console.log(req.session.cart)

//     let cart = req.session.cart;

//     console.log(Object.values(cart))

//     // delete req.session.cart

//     // req.flash('error', 'ITEM DELETED!')
//     // res.render('customers/cart')                    
                    
//     // var productId = req.body.itemId;
//     // var cart = req.session.cart ? req.session.cart : {};
   
//     // delete req.session.cart;
//     // req.session.cart = cart;
//     // console.log("REACHED IN REMOVE" + cart)
//     // res.redirect('/cart');

//     // return res.render('./customers/cart', {
//     //     tacos: null
//     //    });

    
//    });

router.get('/', async(req,res) => res.render('customer/cart'))

router.post('/update-cart', async(req,res) => {

if (!req.session.cart) {
    req.session.cart = {
        items: {},
        totalQty: 0,    
        totalPrice: 0
    }
}

let cart = req.session.cart;

console.log(cart)

// check if item exist or not and based on it increment the qty ,price 
if(!cart.items[req.body.id]) {
    cart.items[req.body.id] = {
        item: req.body,
        qty: 1
    }
    cart.totalQty += 1;
    cart.totalPrice += req.body.price;

} else {
    cart.items[req.body.id].qty += 1
    cart.totalQty += 1;
    cart.totalPrice += req.body.price;
}
return res.json({ totalQty: req.session.cart.totalQty })


})


module.exports = router;