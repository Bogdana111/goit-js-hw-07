const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSabmit);
const info = {};

function handleSabmit(event) {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert(`All form fields must be filled in`);
  } else if (emailValue !== "" || passwordValue !== "") {
    info.email = emailValue;
    info.password = passwordValue;
    console.log(info);
  }

  form.reset();
}
