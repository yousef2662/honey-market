let pay = document.querySelector(".pay");

document.addEventListener("DOMContentLoaded", () => {
  let yourPrice = JSON.parse(localStorage.getItem("total-price"));
  pay.innerHTML = `Please <span class="spa">Pay:</span> <span class="the-pay-number">${yourPrice}</span>`
})