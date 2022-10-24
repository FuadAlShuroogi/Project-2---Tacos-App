
let navMenuDiv = document.getElementById("nav-content");
let navMenu = document.getElementById("nav-toggle");

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
  document.getElementById('message').innerHTML = 'matching';
  document.getElementById("submit").disabled = false;
} else {
  document.getElementById('message').style.color = 'red';
  document.getElementById('message').innerHTML = 'not matching';
  document.getElementById("submit").disabled = true;
}
 }
  }

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.getElementById('cartCounter')
let num =0;

addToCart.forEach((btn) => {
btn.addEventListener('click', (e) => {
  let taco = JSON.parse(btn.dataset.taco)
  cartCounter.innerText = num++;

})
})
