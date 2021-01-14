const pageBody = document.querySelector(".page-body");
const menuButton = document.querySelector(".main-navigation__toggle");
const pageHeader = document.querySelector(".page-header");
const mainNavigation = document.querySelector(".main-navigation");

pageBody.classList.remove("page-body--no-js");
pageHeader.classList.add("page-header--menu-close");
mainNavigation.classList.add("main-navigation--close");

menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  pageHeader.classList.toggle("page-header--menu-close");
  pageHeader.classList.toggle("page-header--menu-open");
  mainNavigation.classList.toggle("main-navigation--close");
  mainNavigation.classList.toggle("main-navigation--open");
})
