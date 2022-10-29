
let navMenuDiv = document.getElementById("nav-content");
let navMenu = document.getElementById("nav-toggle");

let cartCounterEle = document.getElementById('cartCounter');

if(cartCounterEle){
  if(document.getElementById('cartCounter').innerText.length == 0) document.getElementById('cartCounter').style.backgroundColor = 'transparent';
}

    document.onclick = check;

    function check(e) {
      let target = (e && e.target)

      //Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else {
            navMenuDiv.classList.add("hidden");
          }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add("hidden");
        }
      }
    }
    function checkParent(t, elm) {
      while (t.parentNode) {
        if (t == elm) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    }

    let scrollpos = window.scrollY;
    let header = document.getElementById("header");
    let navcontent = document.getElementById("nav-content");
    let brandname = document.getElementById("brandname");

    document.addEventListener("scroll", function () {
      /*Apply classes for slide in bar*/
      scrollpos = window.scrollY;

      if (scrollpos > 10) {
        header.classList.add("bg-white");
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-white");
      } else {
        header.classList.remove("bg-white");
        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-100");
      }
    });


let compare = function() {

let passField = document.getElementById('password').value;
let confirmPassField = document.getElementById('confirm-password').value;

if(passField.length > 0 || confirmPassField.length > 0){
  if (passField == confirmPassField) {
  document.getElementById('message').style.color = 'green';
  document.getElementById('message').innerHTML = 'Matching';
  document.getElementById("submit").disabled = false;
} else {
  document.getElementById('message').style.color = 'red';
  document.getElementById('message').innerHTML = 'Not Matching';
  document.getElementById("submit").disabled = true;
}
 }
  }

  let locationHref = location.href.slice(21,40);
  let locationHrefTwo = location.href.slice(21,46);

  if(locationHref == '/restaurant/orders'){
    initRestaurantOrders()
  }

  let yourOrders = document.querySelector('#yourOrders');

  if (yourOrders){

    document.querySelector('#yourOrders').setAttribute('href', 'http://localhost:3000/customer/orders');

  }

  function initRestaurantOrders() {
    const orderTableBody = document.querySelector('#orderTableBody')
    let orders = []
    let markup

    axios.get('/restaurant/orders', {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then(res => {
        orders = res.data
        markup = generateTable(orders)
        orderTableBody.innerHTML = markup
    }).catch(err => {
        console.log(err)
    })

    function renderItems(items) {
        let parsedItems = Object.values(items)
        return parsedItems.map((menuItem) => {
          return `<p>${ menuItem.item.name } - ${ menuItem.qty } pcs </p>`
        }).join('')
      }

    function generateTable(orders) {

      if(orders.length == 0){
      document.getElementById('sectionData').innerHTML = ` <h1 class="text-center font-bold text-3xl">No Tacos 🌮 Orders Found!</h1>
        <div class="empty-cart">
            <div class="container mx-auto text-center">
                <img class="w-2/5 mx-auto" src="/images/noorder.png" alt="empty-cart">
                <a href="/" class="inline-block px-6 py-2 rounded-full btn-primary text-white text-2xl font-bold mt-15">Go back</a>
            </div>
        </div>`
      }else {

        return orders.map(order => {
            return `
                <tr>
                <td class="border px-0 py-5 text-green-900">
                    <p>${ order.id }</p>
                </td>

                <td class="border px-0 py-2 text-green-900">
                <div>${ (order.user.name) }</div>
              </td>

                <td class="border px-0 py-2 text-green-900">
                <div>${ renderItems(order.items) }</div>
              </td>

                <td class="border px-0 py-2">${ order.address }</td>
                <td class="border px-0 py-2">
                    <div class="inline-block relative w-64">
                        <form action="/restaurant/status" method="POST">
                            <input type="hidden" name="orderId" value="${ order.id }">
                            <select name="status" onchange="this.form.submit()"
                                class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="order_placed"
                                    ${ order.status === 'order_placed' ? 'selected' : '' }>
                                    Placed</option>
                                <option value="confirmed" ${ order.status === 'confirmed' ? 'selected' : '' }>
                                    Confirmed</option>
                                <option value="prepared" ${ order.status === 'prepared' ? 'selected' : '' }>
                                    Prepared</option>
                                <option value="delivered" ${ order.status === 'delivered' ? 'selected' : '' }>
                                    Delivered
                                </option>
                                <option value="completed" ${ order.status === 'completed' ? 'selected' : '' }>
                                    Completed
                                </option>
                            </select>
                        </form>
                    </div>
                </td>
                <td class="border px-0 py-2">
                ${ moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a') }
                </td>
                <td class="border px-0 py-2">
                    ${ order.paymentType.toUpperCase() }
                </td>

                <td class="border px-0 py-2">
                <form method="POST" action="/restaurant/orders/${ order.id }?_method=DELETE">
                <button type="submit" class="flex-2 inline-flex items-center px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>                               
            </form>
            </td>
            </tr>
        `
        }).join('')
      }
    }
  }


let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')
let deleteBtn = document.querySelectorAll('#deleteBtn')
let divToBeDeleted = document.getElementsByClassName("flex items-center my-8");


function deleteCart(taco) {
  axios.post('/cart/delete-cart', taco).then(res => {
    cartCounter.innerText = res.data.totalQty;
   toastr.options.timeOut = 1000;
    toastr.warning('🌮 Deleted 🌮');
  }).catch(err => {
    toastr.error('ERROR!');
})
}

deleteBtn.forEach((btn) => {
  // console.log("I AM IN DELETE BUTTON!")
  btn.addEventListener('click', (e) => {
    let taco = JSON.parse(btn.dataset.taco)
    deleteCart(taco)

  })
})

function updateCart(taco) {
    axios.post('cart/update-cart', taco).then(res => {
      document.getElementById('cartCounter').style.backgroundColor = 'darkorange'
      cartCounter.innerText = res.data.totalQty;
     toastr.options.timeOut = 1000;
      toastr.success('🌮 Added 🌮');
    }).catch(err => {
      toastr.error('ERROR!');
  })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      document.getElementById('cartCounter').style.backgroundColor = 'darkorange'
        let taco = JSON.parse(btn.dataset.taco)
        updateCart(taco)
    })
})

const alertMsg = document.querySelector('#success-alert')
if(alertMsg) {

  let hereOrders = 'Here Are All Your Orders';
  
  if(document.getElementsByTagName('h1')[0].innerText == hereOrders){
    setTimeout(() => {
      alertMsg.remove()
  }, 1000)
    
  }else{
    if(cartCounterEle){
      if(document.getElementById('cartCounter').innerText.length == 0) document.getElementById('cartCounter').style.backgroundColor = 'transparent';
    }else { 
      initRestaurantOrders()
      setTimeout(() => {
          alertMsg.remove()
      }, 1000)
  }
  }
 
}

