import { saveFormData } from "./data";

document.getElementById("feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  saveFormData({ name, email, message });

  const successMessage = document.getElementById("success-message");
  successMessage.classList.remove("hidden");
  successMessage.classList.add("visible");

  event.target.reset()
});
