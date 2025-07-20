document.addEventListener("DOMContentLoaded", () => {
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    window.changeToMoon();
  } else {
    window.changeToSun();
  }
});

window.changeToMoon = function () {
  document.body.classList.add("dark-mode");

  localStorage.setItem("theme", "dark");
};

window.changeToSun = function () {
  document.body.classList.remove("dark-mode");

  localStorage.setItem("theme", "light");
};