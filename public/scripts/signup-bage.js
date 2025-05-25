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


document.getElementById('sign-up-p').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const password = this.password.value;

  try {
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert('Sign up successful!');
      window.location.href = 'index.html'; // adjust as needed
    } else {
      alert(data.message || 'Sign up failed');
    }
  } catch (err) {
    alert('Error connecting to server');
    console.error(err);
  }
});