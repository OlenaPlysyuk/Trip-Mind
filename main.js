// Menu
const menu = document.getElementById("menu");
const burger = document.getElementById("burger");
const asideMenu = document.getElementById("menu__aside");
let bool;

burger.addEventListener("click", () => {
  if (bool === 1) {
    burger.classList.remove("active");
    asideMenu.classList.remove("kol");
    menu.style.display = "none";
    bool = 0;
  } else {
    burger.classList.add("active");

    setTimeout(() => {
      asideMenu.classList.add("kol");
    }, 100);

    menu.style.display = "block";
    bool = 1;
  }
});

// Counter
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondEl = document.getElementById("second");

const newTour = "16 Aug 2024";

function countDown() {
  const newTourDate = new Date(newTour);
  const currentDown = new Date();

  const totalSeconds = new Date(newTourDate - currentDown) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondEl.innerHTML = seconds;
}

// initial call
countDown();

setInterval(countDown, 1000);

// Form reg
let header__button = document.querySelector(".header__button");
let form__reg = document.querySelector(".form__reg");
let svg__close = document.querySelector(".svg__close");

header__button.addEventListener("click", function () {
  form__reg.classList.toggle("active");

  // off menu
  header_nav_burger.classList.toggle("noactive");
});

svg__close.addEventListener("click", function () {
  form__reg.classList.toggle("active");

  // off menu
  header_nav_burger.classList.toggle("noactive");
});
