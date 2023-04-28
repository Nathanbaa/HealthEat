// ----  Hide Logo / Toggler Position
var btnToggler = document.querySelector('.navbar-toggler');
var logo = document.querySelector('.navbar-brand');


window.addEventListener('scroll', function() {
  if (window.scrollY > 650) {
    logo.classList.add('nav-hide');
    btnToggler.classList.add('toggler-reposition');
  } else {
    logo.classList.remove('nav-hide');
    btnToggler.classList.remove('toggler-reposition');
  }
});

// ----  add GreenBg-body
var body = document.querySelector('body');

window.addEventListener('scroll', function () {
  if (window.scrollY > 2750 && window.scrollY < 7500) {
      body.classList.add('body-green');
  } else {
      body.classList.remove('body-green');
  }
});