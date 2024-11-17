import { saveFormData } from "./formData.js";

const form = document.getElementById("feedback-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  saveFormData(formData);

  successMessage.textContent = `Дякуємо, ${formData.name}! Ваше повідомлення надіслано успішно.`;
  successMessage.classList.remove("hidden");

  form.reset();

  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 5000);
});
