import { restaurant } from '/js/restaurant.js'

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')
let deleteBtn = document.querySelectorAll('#deleteBtn')

function updateCart(taco) {
   axios.post('cart/update-cart', taco).then(res => {
    document.getElementById('cartCounter').style.backgroundColor = 'darkorange'
       cartCounter.innerText = res.data.totalQty
       toastr.options.timeOut = 1000;
       toastr.success('🌮 Added 🌮');
   }).catch(err => {
    toastr.error('ERROR!' , err);
   })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      document.getElementById('cartCounter').style.backgroundColor = 'darkorange'
        let taco = JSON.parse(btn.dataset.taco)
        updateCart(taco)
    })
})

function deleteCart(dataPrice , dataId, qty) {

 axios.post('cart/delete-cart' , {

 price :dataPrice,
 itemId : dataId,
 qty : qty


  }).then(res => {
    document.getElementById('cartCounter').style.backgroundColor = 'darkorange'
    document.getElementById('totAmt').innerText = res.data.totalAmt
    cartCounter.innerText = res.data.totalQty
       toastr.options.timeOut = 3000;
       toastr.error('🌮 Deleted 🌮');
   }).catch(err => {
    toastr.error('ERROR!' , err);
   })
  
}

deleteBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let dataPrice = btn.dataset.price;
    let dataId = btn.dataset.id;
    let qty = btn.dataset.qty;

    deleteCart(dataPrice , dataId,qty)
   btn.parentNode.remove()
    
  })
})

const alertMsg = document.querySelector('#success-alert')
if(alertMsg) {

  let hereOrders = 'Here Are All Your Orders';
  
  if(document.getElementsByTagName('h1')[0].innerText == hereOrders){
    setTimeout(() => {
      alertMsg.remove()
  }, 5000)
    
  }else{
    if(cartCounterEle){
      if(document.getElementById('cartCounter').innerText.length == 0) document.getElementById('cartCounter').style.backgroundColor = 'transparent';
    }else { 
      setTimeout(() => {
          alertMsg.remove()
      }, 5000)
  }
  }
}

// Change order status
let statuses = document.querySelectorAll('.status_line')
let hiddenInput = document.querySelector('#hiddenInput')
let order = hiddenInput ? hiddenInput.value : null
order = JSON.parse(order)
let time = document.createElement('small')

function updateStatus(order) {
   statuses.forEach((status) => {
    
       status.classList.remove('step-completed')
       status.classList.remove('current')
   })
   let stepCompleted = true;
   statuses.forEach((status) => {
      let dataProp = status.dataset.status
      if(stepCompleted) {
           status.classList.add('step-completed')
      }
      if(dataProp === order.status) {
           stepCompleted = false
           time.innerText = moment(order.updatedAt).format('MMMM Do YYYY, h:mm:ss a')
           
           status.appendChild(time)
          if(status.nextElementSibling) {
           status.nextElementSibling.classList.add('current')
          }
      }
   })

}

updateStatus(order);

// Socket
let socket = io()

//Join
if(order) {
socket.emit('join', `order${order.id}`)
  
}
let restaurantAreaPath = window.location.pathname
if(restaurantAreaPath.includes('restaurant')) {

   restaurant(socket)
   socket.emit('join', 'restaurantAreaPath')

}

   
   socket.on('orderUpdated', (data) => {
     const updatedOrder = { ...order }
     updatedOrder.updatedAt = moment().format()
     updatedOrder.status = data.status
     updateStatus(updatedOrder)
     toastr.options.timeOut = 2000;
      toastr.success('🌮 Order Status Updated! 🌮');
  })


