let counterValue = 0;

const btnDec = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const btnInc = document.querySelector(
  '#counter button[data-action="increment"]'
);
const number = document.querySelector("#value");

btnDec.addEventListener("click", decNumber);
btnInc.addEventListener("click", incNumber);

function decNumber() {
  counterValue -= 1;

  number.textContent = counterValue;
  number.style.color = "red";
}

function incNumber() {
  counterValue += 1;

  number.textContent = counterValue;
  number.style.color = "green";
}
