const express = require('express'),
router = express.Router(),
moment = require('moment'),
db = require('../../models')

router.get('/orders', async(req, res) => {

  let user = await db.user.findByPk(res.locals.userId)

  if(user == null){
    return res.redirect('/')
  }

    if(req.body.userId !== undefined){
  if(user.role !== 'customer') {
    return res.redirect('/')
  }
}

  let userOrders = await res.locals.user.getOrders({order: [['createdAt', 'DESC']]})
  // console.log("USERORDERS ARE --> " , userOrders)
    res.header('Cache-Control', 'no-store')
    res.render('customer/orders', { orders: userOrders , moment: moment })

})

router.post('/orders', async (req, res) => {

const { phone, address, paymentType } = req.body

if(!phone || !address) {
  return res.status(422).json({ message : 'All fields are required' });
}

          let user = res.locals.userId

            await db.order.create({
            userId: user,
            items: req.session.cart.items,
            phone,
            address,
            paymentType : paymentType
          }, {include: [db.user]})
            
            .then(async (orders) => {

              req.flash('success', 'Order placed successfully!!!')
              delete req.session.cart
              
              //Emit
              const eventEmitter = req.app.get('eventEmitter')
              // console.log(eventEmitter)
              eventEmitter.emit('orderPlaced', orders)
              return res.redirect('/customer/orders')  
              });         
          })


    router.get('/orders/:id' , async (req, res) =>{
        const order = await db.order.findByPk(req.params.id);
        if(res.locals.userId === order.userId) {
        return res.render('customer/trackorder', { order })     
        }
      return res.redirect('/')     
    } )

    module.exports = router;