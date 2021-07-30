const burgerContainer = document.querySelector(".page-header__hamburger-container");
const burger = document.querySelector(".page-header__hamburger");
const mainNav = document.querySelector(".main-navigation");

burgerContainer.addEventListener('click', ()=> {
 mainNav.classList.toggle("main-navigation--dnone");
 burger.classList.toggle("page-header__hamburger--active");

});