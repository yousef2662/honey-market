document.addEventListener("DOMContentLoaded", () => {
  const changeModeDiv = document.querySelectorAll(".change-mode");

  // Apply correct mode when page fully loads
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    window.changeToMoon();
  } else {
    window.changeToSun();
  }

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
let goUp = document.querySelector(".go-up");
let mainCart = document.querySelector(".main-cart")

window.onscroll = function () {
  if (window.scrollY >= 1) {
    navBar.style.borderBottom = "4px solid var(--gold-color)";
    if (navBar.classList.contains("dark-mode")) {
      navBar.style.backgroundColor = "black";
    }
  } else {
    navBar.style.borderBottom = "4px solid transparent";
    if (navBar.classList.contains("dark-mode")) {
      navBar.style.backgroundColor = "transparent";
    }
  }

  if (window.scrollY >= screen.height - 300) {
    adjusterMobile.style.animationPlayState = "running";
  }
  if (window.pageYOffset > 100) {
    goUp.classList.add("active");
  } else {
    goUp.classList.remove("active");
  }

  if (window.scrollY >= 300) {
    mainCart.style.opacity = "1";
  }

};

document.addEventListener("DOMContentLoaded", async function () {
  // تأكد من أن مكتبة FontAwesome قد أنهت التحويل
  await FontAwesome.dom.i2svg();
  // الآن يمكنك التفاعل مع عنصر SVG بدلاً من i
  let amountShow = document.querySelectorAll(".amount-show");
  let decAmount = document.querySelectorAll(".dec-amount");
  let incAmount = document.querySelectorAll(".inc-amount");
  let addToCart = document.querySelectorAll(".add-to-cart");
  let cartAmou = document.querySelector(".main-cart span");

  cartAmou.innerHTML = JSON.parse(localStorage.getItem("current-cart"));
  if (cartAmou.innerHTML === "") {
    cartAmou.innerHTML = 0;
  }


  if (cartAmou.innerHTML === "0") {
    amountShow[0].innerHTML = 0;
    amountShow[1].innerHTML = 0;
    amountShow[2].innerHTML = 0;
  } else {
    amountShow[0].innerHTML = JSON.parse(localStorage.getItem("current-amou-sh1"));
    amountShow[1].innerHTML = JSON.parse(localStorage.getItem("current-amou-sh2"));
    amountShow[2].innerHTML = JSON.parse(localStorage.getItem("current-amou-sh3"));
  }


  incAmount.forEach((e) => {
    e.addEventListener("click", () => {
      let index = e.getAttribute("data-index");
      if (index === "1") {
        amountShow[0].innerHTML = parseInt(amountShow[0].innerHTML) + 1;
        cartAmou.innerHTML = parseInt(cartAmou.innerHTML) + 1;
      } if (index === "2") {
        amountShow[1].innerHTML = parseInt(amountShow[1].innerHTML) + 1;
        cartAmou.innerHTML = parseInt(cartAmou.innerHTML) + 1;
      } if (index === "3") {
        amountShow[2].innerHTML = parseInt(amountShow[2].innerHTML) + 1;
        cartAmou.innerHTML = parseInt(cartAmou.innerHTML) + 1;
      }

      let amountShowCont1 = amountShow[0].innerHTML;
      let amountShowCont2 = amountShow[1].innerHTML;
      let amountShowCont3 = amountShow[2].innerHTML;
      let currentAmou = cartAmou.innerHTML;
      localStorage.setItem("current-cart", JSON.stringify(currentAmou));
      localStorage.setItem("current-amou-sh1", JSON.stringify(amountShowCont1));
      localStorage.setItem("current-amou-sh2", JSON.stringify(amountShowCont2));
      localStorage.setItem("current-amou-sh3", JSON.stringify(amountShowCont3));
      localStorage.setItem("current-cart", JSON.stringify(currentAmou));
    })
  })

  decAmount.forEach((e) => {
    e.addEventListener("click", () => {
      let index = e.getAttribute("data-index");
      if (index === "1") {
        if (amountShow[0].innerHTML > 0) {
          amountShow[0].innerHTML = parseInt(amountShow[0].innerHTML) - 1;
          cartAmou.innerHTML = parseInt(cartAmou.innerHTML) - 1;
        }
      } if (index === "2") {
        if (amountShow[1].innerHTML > 0) {
          amountShow[1].innerHTML = parseInt(amountShow[1].innerHTML) - 1;
          cartAmou.innerHTML = parseInt(cartAmou.innerHTML) - 1;
        }
      } if (index === "3") {
        if (amountShow[2].innerHTML > 0) {
          amountShow[2].innerHTML = parseInt(amountShow[2].innerHTML) - 1;
          cartAmou.innerHTML = parseInt(cartAmou.innerHTML) - 1;
        }
      }


      let amountShowCont1 = amountShow[0].innerHTML;
      let amountShowCont2 = amountShow[1].innerHTML;
      let amountShowCont3 = amountShow[2].innerHTML;
      let currentAmou = cartAmou.innerHTML;
      localStorage.setItem("current-cart", JSON.stringify(currentAmou));
      localStorage.setItem("current-amou-sh1", JSON.stringify(amountShowCont1));
      localStorage.setItem("current-amou-sh2", JSON.stringify(amountShowCont2));
      localStorage.setItem("current-amou-sh3", JSON.stringify(amountShowCont3));
    })
  })

});

// pro-card funcitions

