  let cartCounterEle = document.getElementById('cartCounter');

  if(cartCounterEle){
    if(document.getElementById('cartCounter').innerText.length == 0) document.getElementById('cartCounter').style.backgroundColor = 'transparent';
  }
  
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


  let yourOrders = document.querySelector('#yourOrders');

  if (yourOrders){

    document.querySelector('#yourOrders').setAttribute('href', 'http://localhost:3000/customer/orders');

  }