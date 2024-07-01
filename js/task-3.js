const inputValue = document.querySelector("#name-input");
const spanValue = document.querySelector("#name-output");

inputValue.addEventListener("input", handleInput);

function handleInput(event) {
  spanValue.textContent =
    event.currentTarget.value.trim() === ""
      ? "Anonymous"
      : event.currentTarget.value.trim();
}
