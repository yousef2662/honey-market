let container = document.querySelector(".log-in-container");

// التحقق من الحالة المحفوظة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    changeToMoon();
  } else {
    changeToSun();
  }
});



window.changeToMoon = function () {
  document.body.classList.add("dark-mode");
  let container = document.querySelector(".log-in-container");
  if (container) container.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
};

window.changeToSun = function () {
  document.body.classList.remove("dark-mode");
  let container = document.querySelector(".log-in-container");
  if (container) container.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
};

// تحميل الحالة عند تشغيل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    window.changeToMoon();
  } else {
    window.changeToSun();
  }
});



// __________________________________________


