
document.addEventListener("DOMContentLoaded", () => {

  let pay = document.querySelector(".pay");
  let yourPrice = JSON.parse(localStorage.getItem("total-price"));
  pay.innerHTML = `Please <span class="spa">Pay:</span> <span class="the-pay-number">${yourPrice}</span>`

  let reqForSt = localStorage.getItem("reqFor");
  if (reqForSt === "ok") {
    reqFor.style.display = "none";
    container.style.display = "flex";
    vc.style.display = "block";
  }
})

window.onload = () => {
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    window.changeToMoon();
  } else {
    window.changeToSun();
  }
};


// start dark mode fun
window.changeToMoon = function () {
  document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
};

window.changeToSun = function () {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
};


let container = document.querySelector(".container");
let vc = document.querySelector(".vc");
let egf = document.querySelector(".egf");
let egtxtH3 = document.querySelector(".egtxt h3");
let egtxtIn = document.querySelector(".egtxt input");
let reqFor = document.querySelector(".required-form");
let reqForForm = document.querySelector(".required-form form");
let eaf = document.querySelector(".eaf");
let eaH3 = document.querySelector(".eah3");
let eaIn = document.querySelector(".eain");
let enf = document.querySelector(".enf");
let enH3 = document.querySelector(".enh3");
let enIn = document.querySelector(".enin");
let egcon = document.querySelector(".egcon");
let egconH3 = document.querySelectorAll(".egcon h3");
let ol = document.querySelectorAll(".ol");
let rfBtn = document.querySelector(".rfBtn");
let erd = document.querySelector(".erd");


egconH3.forEach((e) => {
  e.onmouseover = () => {
    e.style.backgroundColor = "rgba(155, 166, 169, 0.573)";
  }
  e.onmouseleave = () => {
    e.style.backgroundColor = "transparent";
  }
  e.onclick = () => {
    egtxtIn.value = `${e.innerHTML}`
  }
});

egf.addEventListener("click", () => {
  egf.style.outline = "1px solid #075e54";
  egtxtH3.style.transform = "translate(-7px, -100%)";
  egtxtH3.style.color = "var(--oliver-color)";
  egtxtIn.focus();
  egcon.classList.toggle("active");
});

eaf.addEventListener("click", () => {
  eaf.style.borderBottom = "2px solid rgba(7, 94, 84, 0.5)";
  eaH3.style.transform = "translate(-7px, -100%)";
  eaH3.style.color = "var(--oliver-color)";
  eaIn.focus();
  ol[0].classList.add("olAni");
});

enf.addEventListener("click", () => {
  enf.style.borderBottom = "2px solid rgba(7, 94, 84, 0.5)";
  enH3.style.transform = "translate(-7px, -100%)";
  enH3.style.color = "var(--oliver-color)";
  enIn.focus();
  ol[1].classList.add("olAni");
});


reqForForm.addEventListener("click", (e) => {
  if (e.target !== reqForForm) {
    return;
  } else {

    ol[0].classList.remove("olAni");
    ol[1].classList.remove("olAni");

    if (egtxtIn.value === "") {
      egtxtH3.style.transform = "translate(0px, 0px)";
      egf.style.outline = "none";
      egtxtH3.style.color = "rgb(194, 194, 194)";
    }
    egcon.classList.remove("active");


    if (eaIn.value === "") {
      eaH3.style.transform = "translate(0px, 0px)";
      eaf.style.borderBottom = "1px solid var(--oliver-color)";
      eaH3.style.color = "rgb(194, 194, 194)";
    }

    if (enIn.value === "") {
      enH3.style.transform = "translate(0px, 0px)";
      enf.style.borderBottom = "1px solid var(--oliver-color)";
      enH3.style.color = "rgb(194, 194, 194)";
    }

  }
});

rfBtn.addEventListener("click", () => {
  if (egtxtIn.value !== "" && eaIn.value !== "" && enIn.value !== "") {
    localStorage.setItem("reqFor", "ok");
  } else {
    localStorage.setItem("reqFor", "no");
  }
});