function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", handleBtnClick);
destroyBtn.addEventListener("click", destroyBoxes);

function handleBtnClick() {
  const amount = input.value;

  if (amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  createBoxes(amount);
  input.value = "";
}

function createBoxes(amount) {
  const boxElements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxElements.push(box);
  }

  boxes.append(...boxElements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
