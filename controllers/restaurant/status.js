const express = require('express'),
router = express.Router(),
db = require('../../models')


//Need further debugging .. 
router.post('/' ,(req, res) => {

  console.log("AM I HITTING THIS ROUTE ?")

    db.order.update({
        id: req.body.orderId,
        status: req.body.status,

        }, {
      }).then((order)=>{
        const eventEmitter = req.app.get('eventEmitter')
        eventEmitter.emit('orderUpdated', { id: req.body.orderId, status: req.body.status })
        return res.redirect('/restaurant/orders')
      }).catch((err) => {
        if(err) {
            return res.redirect('/restaurant/orders')
        }
      });

});

module.exports = router;