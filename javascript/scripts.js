// Открытие burger-menu
var menuBtn = document.querySelector(".burger-menu"),
  burgerLine = document.querySelectorAll(".burger-menu__line");

burgerLine.forEach(function (line) {
  menuBtn.addEventListener("click", function () {
    line.classList.toggle("burger-menu__line-active");
    document.querySelector(".menu").classList.toggle("menu-active");
    document.querySelector("body").classList.toggle("hidden");
  });
});
