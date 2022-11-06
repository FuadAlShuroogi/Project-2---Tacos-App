export function restaurant(socket) {
    const orderTableBody = document.querySelector('#orderTableBody')
    let orders = []
    let markup

    axios.get('/restaurant/orders', {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then(res => {
        orders = res.data
        markup = generateMarkup(orders)
        orderTableBody.innerHTML = markup
    }).catch(err => {
        console.log(err)
    })

    function renderItems(items) {
        let parsedItems = Object.values(items)
        return parsedItems.map((menuItem) => {
            return `
                <p>${ menuItem.item.name } - ${ menuItem.qty } pcs </p>
            `
        }).join('')
      }

    function generateMarkup(orders) {
        return orders.map(order => {
            return `
                <tr>
                <td class="border px-4 py-5 text-green-900">${ order.id }</td>
                <td class="border px-4 py-5 text-green-900">${ order.user.name }</td>

                <td class="border px-4 py-5 text-green-900">
                    <div>${ renderItems(order.items) }</div>
                </td>
                
                <td class="border px-4 py-5 text-green-900">${ order.address }</td>
                <td class="border px-4 py-5 text-green-900">
                    <div class="inline-block relative w-64">
                        <form action="/restaurant/orders/status" method="POST">
                            <input type="hidden" name="id" value="${ order.id }">
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
                <td class="border px-4 py-2">
                    ${ moment(order.createdAt).format('hh:mm A') }
                </td>
                <td class="border px-4 py-2">
                    ${ order.paymentType.toUpperCase() }
                </td>
                <td class="border px-0 py-2">
                <form method="POST" action="/restaurant/orders/${ order.id }?_method=DELETE">
                <button class="flex-2 inline-flex items-center px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
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


    // Socket
    socket.on('orderPlaced', (order) => {
        initAdmin(socket)
        toastr.options = {
            "preventDuplicates": true,
            "preventOpenDuplicates": true
            };
        toastr.success('🌮 NEW ORDER! 🌮', {timeOut: 2000});
        
    })


    function hasToastr(message){

        var hasToastr = false;
      
        var $toastContainer = $('#toast-container');
        if ($toastContainer.length > 0) {
          var $successToastr = $toastContainer.find('.toast-success');
          if ($successToastr.length > 0) {
            var currentText = $successToastr.find('.toast-message').text();
            var areEqual = message.toUpperCase() === currentText.toUpperCase();
            if (areEqual) {
                hasToastr = true;
            }
          }
        }
      
        return hasToastr;
      }

          
      //Usage
      var message = '🌮 NEW ORDER! 🌮';
      if (hasToastr(message)) {
          toastr.success(message, title, ToastrOptions);
      }


}


