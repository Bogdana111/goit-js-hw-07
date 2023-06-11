const input = document.querySelector("#validation-input");

input.addEventListener("blur", validateInput);

function validateInput() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (input.value === "") {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
