
document.addEventListener("DOMContentLoaded", () => {

  let pay = document.querySelector(".pay");
  let yourPrice = JSON.parse(localStorage.getItem("total-price"));
  pay.innerHTML = `Please <span class="spa">Pay:</span> <span class="the-pay-number">${yourPrice}</span>`
})

window.onload = () => {
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    window.changeToMoon();
  } else {
    window.changeToSun();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const changeModeDiv = document.querySelectorAll(".change-mode");

  // Apply correct mode when page fully loads

  // Handle toggle on click
  if (changeModeDiv) {
    changeModeDiv[0].addEventListener("click", () => {
      let currentTheme = localStorage.getItem("theme");
      if (currentTheme === "dark") {
        window.changeToSun();
      } else {
        window.changeToMoon();
      }
    });
    changeModeDiv[1].addEventListener("click", () => {
      let currentTheme = localStorage.getItem("theme");
      if (currentTheme === "dark") {
        window.changeToSun();
      } else {
        window.changeToMoon();
      }
    });
  }
});



// start dark mode fun
window.changeToMoon = function () {
  document.body.classList.add("dark-mode");
  let sun = document.querySelectorAll(".sun-mode");
  let moon = document.querySelectorAll(".moon-mode");
  let changeMode = document.querySelectorAll(".change-mode");
  let navbar = document.querySelector(".nav-bar");
  let landing = document.querySelector(".landing");
  let services = document.querySelector(".services");
  let products = document.querySelector(".products");
  let contact = document.querySelector(".Contact");
  let textOnLanding = document.querySelector(".text-on-landing");
  let goUp = document.querySelector(".go-up");

  if (sun) sun[0].style.transform = "scale(.84)";
  if (sun) sun[1].style.transform = "scale(.84)";
  if (sun) moon[0].style.transform = "scale(1)";
  if (sun) moon[1].style.transform = "scale(1)";
  if (sun) sun[0].style.backgroundColor = "transparent";
  if (sun) sun[1].style.backgroundColor = "transparent";
  if (sun) moon[0].style.backgroundColor = "white";
  if (sun) moon[1].style.backgroundColor = "white";
  if (sun) sun[0].style.color = "var(--inactive-color-forSun)";
  if (sun) sun[1].style.color = "var(--inactive-color-forSun)";
  if (sun) moon[0].style.color = "var(--moon-color)";
  if (sun) moon[1].style.color = "var(--moon-color)";
  if (changeMode) changeMode[0].style.backgroundColor = "var(--moon-color)";
  if (changeMode) changeMode[1].style.backgroundColor = "var(--moon-color)";

  if (navbar) navbar.classList.add("dark-mode");
  if (navbar) navbar.style.backgroundColor = "transparent";
  if (landing) landing.classList.add("dark-mode");
  if (services) services.classList.add("dark-mode");
  if (products) products.classList.add("dark-mode");
  if (contact) contact.classList.add("dark-mode");
  if (textOnLanding) textOnLanding.classList.remove("text-black-50");
  if (goUp) goUp.classList.add("dark-mode");

  localStorage.setItem("theme", "dark");
};

window.changeToSun = function () {
  document.body.classList.remove("dark-mode");
  let sun = document.querySelectorAll(".sun-mode");
  let moon = document.querySelectorAll(".moon-mode");
  let changeMode = document.querySelectorAll(".change-mode");
  let navbar = document.querySelector(".nav-bar");
  let landing = document.querySelector(".landing");
  let services = document.querySelector(".services");
  let products = document.querySelector(".products");
  let contact = document.querySelector(".contact");
  let textOnLanding = document.querySelector(".text-on-landing");
  let goUp = document.querySelector(".go-up");

  if (moon) moon[0].style.transform = "scale(.84)";
  if (moon) moon[1].style.transform = "scale(.84)";
  if (moon) sun[0].style.transform = "scale(1)";
  if (moon) sun[1].style.transform = "scale(1)";
  if (moon) moon[0].style.backgroundColor = "transparent";
  if (moon) moon[1].style.backgroundColor = "transparent";
  if (moon) sun[0].style.backgroundColor = "white";
  if (moon) sun[1].style.backgroundColor = "white";
  if (moon) moon[0].style.color = "var(--inactive-color-forMoon)";
  if (moon) moon[1].style.color = "var(--inactive-color-forMoon)";
  if (moon) sun[0].style.color = "var(--sun-color)";
  if (moon) sun[1].style.color = "var(--sun-color)";
  if (changeMode) changeMode[0].style.backgroundColor = "var(--sun-color)";
  if (changeMode) changeMode[1].style.backgroundColor = "var(--sun-color)";

  if (navbar) navbar.classList.remove("dark-mode");
  if (navbar) navbar.style.backgroundColor = "white";
  if (landing) landing.classList.remove("dark-mode");
  if (services) services.classList.remove("dark-mode");
  if (products) products.classList.remove("dark-mode");
  if (contact) contact.classList.remove("dark-mode");
  if (textOnLanding) textOnLanding.classList.add("text-black-50");
  if (goUp) goUp.classList.remove("dark-mode");

  localStorage.setItem("theme", "light");
};