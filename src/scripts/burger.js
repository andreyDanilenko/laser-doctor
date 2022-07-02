let wrapper = document.querySelector('.header__wrapper');
let navToggle = document.querySelector('.header__burger');

navToggle.addEventListener('click', function () {
  if (wrapper.classList.contains('header__wrapper--closed')) {
    wrapper.classList.remove('header__wrapper--closed');
    wrapper.classList.add('header__wrapper--opened');
  } else {
    wrapper.classList.add('header__wrapper--closed');
    wrapper.classList.remove('header__wrapper--opened');
  }
});