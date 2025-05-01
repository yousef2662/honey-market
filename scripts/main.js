document.addEventListener("DOMContentLoaded", () => {
  const changeModeDiv = document.querySelector(".change-mode");

  // Apply correct mode when page fully loads
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    window.changeToMoon();
  } else {
    window.changeToSun();
  }

  // Handle toggle on click
  if (changeModeDiv) {
    changeModeDiv.addEventListener("click", () => {
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
  let sun = document.querySelector(".sun-mode");
  let moon = document.querySelector(".moon-mode");
  let changeMode = document.querySelector(".change-mode");
  let navbar = document.querySelector(".navbar");
  let landing = document.querySelector(".landing");
  let services = document.querySelector(".services");
  let projects = document.querySelector(".projects");
  let footer = document.querySelector(".footer1");
  let contact = document.querySelector(".Contact");
  let textOnLanding = document.querySelector(".text-on-landing");
  let goUp = document.querySelector(".go-up");

  if (sun) sun.style.transform = "scale(.84)";
  if (sun) moon.style.transform = "scale(1)";
  if (sun) sun.style.backgroundColor = "transparent";
  if (sun) moon.style.backgroundColor = "white";
  if (sun) sun.style.color = "var(--inactive-color-forSun)";
  if (sun) moon.style.color = "var(--moon-color)";
  if (changeMode) changeMode.style.backgroundColor = "var(--moon-color)";

  if (navbar) navbar.classList.add("dark-mode");
  if (landing) landing.classList.add("dark-mode");
  if (services) services.classList.add("dark-mode");
  if (projects) projects.classList.add("dark-mode");
  if (footer) footer.classList.add("dark-mode");
  if (contact) contact.classList.add("dark-mode");
  if (textOnLanding) textOnLanding.classList.remove("text-black-50");
  if (goUp) goUp.classList.add("dark-mode");

  localStorage.setItem("theme", "dark");
};

window.changeToSun = function () {
  document.body.classList.remove("dark-mode");
  let sun = document.querySelector(".sun-mode");
  let moon = document.querySelector(".moon-mode");
  let changeMode = document.querySelector(".change-mode");
  let navbar = document.querySelector(".navbar");
  let landing = document.querySelector(".landing");
  let services = document.querySelector(".services");
  let projects = document.querySelector(".projects");
  let footer = document.querySelector(".footer1");
  let contact = document.querySelector(".Contact");
  let textOnLanding = document.querySelector(".text-on-landing");
  let goUp = document.querySelector(".go-up");

  if (moon) moon.style.transform = "scale(.84)";
  if (moon) sun.style.transform = "scale(1)";
  if (moon) moon.style.backgroundColor = "transparent";
  if (moon) sun.style.backgroundColor = "white";
  if (moon) moon.style.color = "var(--inactive-color-forMoon)";
  if (moon) sun.style.color = "var(--sun-color)";
  if (changeMode) changeMode.style.backgroundColor = "var(--sun-color)";

  if (navbar) navbar.classList.remove("dark-mode");
  if (landing) landing.classList.remove("dark-mode");
  if (services) services.classList.remove("dark-mode");
  if (projects) projects.classList.remove("dark-mode");
  if (footer) footer.classList.remove("dark-mode");
  if (contact) contact.classList.remove("dark-mode");
  if (textOnLanding) textOnLanding.classList.add("text-black-50");
  if (goUp) goUp.classList.remove("dark-mode");

  localStorage.setItem("theme", "light");
};

// end dark mode fun

let searchIcon = document.querySelector(".search");
let searchInWeb = document.querySelector(".right-section h1");

function toVisi() {
  searchInWeb.style.visibility = "visible";
  searchInWeb.style.transform = "translateX(0)";
};

function toNonVisi() {
  searchInWeb.style.visibility = "hidden";
  searchInWeb.style.transform = "translateX(105px)";
};

let onSearching = document.querySelector(".on-searching");
function searchContain() {
  onSearching.style.display = "flex"
};

onSearching.addEventListener('click', function (e) {
  if (e.target !== this) return; // Only run if the parent was clicked
  onSearching.style.display = "none";
});

let togglerContainer = document.querySelector(".toggler-container");
function showTogCon() {
  if (togglerContainer.classList.contains("inactive")) {
    togglerContainer.style.transform = "scale(1)";
    togglerContainer.classList.remove("inactive")
  } else {
    togglerContainer.style.transform = "scale(0)";
    togglerContainer.classList.add("inactive")
  }
}

let navBar = document.querySelector(".nav-bar");
let progress = document.querySelector(".progress-scroll");
let adjusterMobile = document.querySelector(".landing .adjuster-mobile .landing-bee")

window.onscroll = function () {
  if (window.scrollY >= 1) {
    navBar.style.borderBottom = "4px solid var(--gold-color)";
  } else {
    navBar.style.borderBottom = "4px solid transparent";
  }
  if (window.scrollY >= screen.height - 120) {
    adjusterMobile.style.animationPlayState = "running";
  }
};




