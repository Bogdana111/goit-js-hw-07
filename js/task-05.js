const input = document.getElementById("name-input");
const nameLabel = document.getElementById("name-output");

input.addEventListener("input", () => {
  nameLabel.textContent = input.value === "" ? "Anonymous" : input.value;
});
