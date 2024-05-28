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
