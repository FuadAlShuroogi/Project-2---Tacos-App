const express = require('express'),
router = express.Router()
//<-- Need to work on it later -->

router.post('/delete-cart', async(req,res) => {

    let reqID = req.body.itemId;

    let price = req.body.price;

    let qty = req.body.qty;


    // console.log("REQ BODY ID IS  -> " , reqID)

    // let cart = req.session.cart.items[reqID];

    // console.log("CART DELETE IS -> " , cart)

    // sessionStorage.removeItem('key');


    // console.log("SESSION STORE BEFORE" , req.sessionStore)


    // console.log("SESSION STORE NOW " , req.sessionStore)

    let cart = req.session.cart;

    // console.log(cart.totalQty -= 1)
    // console.log(req.session.cart.totalPrice  - req.body.price)

// console.log(cart.items[reqID])

// const [price , name] = cart.items[reqID];
// console.log(cart.items[reqID].item.price)
// console.log(cart.items[reqID].qty)

// console.log(price)


// let priceAfterDeletion = req.session.cart.totalPrice - price;


// console.log(req.body.price)
    // console.log(req.session.cart.totalPrice - cart.items[reqID].item.price)
    delete cart.items[reqID]


     let totalPrice = cart.totalPrice -= price * qty;

     let totalQty = cart.totalQty -= qty;


    // console.log(cart.items[reqID].qty)


        // console.log("SESSION STORE NOW " , req.sessionStore)

    //    let qtyAfterDelete = req.session.cart.totalQty - cart.items[reqID].qty

    // const tacoId = req.body.itemId;

     
        // const isExisting = cart.items.findIndex(p => p.id == tacoId);
        // if (isExisting >= 0) {
        //     const deletedProduct = cart.items[isExisting];
        //     cart.totalPrice -= deletedProduct.price * deletedProduct.qty;
        //     cart.items.splice(isExisting, 1);
        // }
    
        // res.render('/cart' ,{ totalPrice: priceAfterDeletion } )

        return res.json({ totalAmt: totalPrice , totalQty : totalQty  })

})

router.get('/', async(req,res) => res.render('customer/cart'))

router.post('/update-cart', async(req,res) => {

//<-- Create the cart session -->

if (!req.session.cart) {
    req.session.cart = {
        items: {},
        totalQty: 0,    
        totalPrice: 0
    }
}
// <-- CART CREATED -->

let cart = req.session.cart;

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