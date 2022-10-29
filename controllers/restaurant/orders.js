const express = require('express'),
router = express.Router(),
db = require('../../models'),
sequelize = require('sequelize')

router.get('/' , async (req, res) => {

  let user = await db.user.findByPk(res.locals.userId)

  if(user.role !== 'restaurant') {
    console.log("IS THIS BEING CALLED ?")
    return res.redirect('/')
  }
  
  db.order.findAll({
        where: {
          status: {[sequelize.Op.not]: 'completed'}
        },
        order: [['createdAt', 'DESC']],
        include: [db.user]
      }).then((orders) => {
        if(req.xhr) {
            return res.json(orders)
        } else {
         return res.render('restaurant/orders' , {orders})
        }
      });
 })

 router.post('/status' ,async(req, res) => {

let values = {status: req.body.status, };
let condition = { where :{id: req.body.id}}; 

  await db.order.update(values,condition)

  .then(async r => {
    req.flash('success', 'Order updated successfully')

    const orders = await db.order.findAll({order: [['createdAt', 'DESC']]})

res.header('Cache-Control', 'no-store')
res.render('restaurant/orders', { orders: orders})


})

 })

 router.delete('/:orderId', async (req,res) => {

 await db.order.destroy({
      where: { id: req.params.orderId }
  }).then(async r => {
    req.flash('success', 'Order deleted successfully')

    const orders = await db.order.findAll({
      where: {
        status: {[sequelize.Op.not]: 'completed'}
      }
    , order: [['createdAt', 'DESC']]

    })

res.header('Cache-Control', 'no-store')
res.render('restaurant/orders', { orders: orders})

})
})

module.exports = router;
