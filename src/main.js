import { saveFormData } from "./data.js";
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  saveFormData(data);

  PNotify.success({
    text: "данні успішно збережені!!!",
    delay: 2000,
    addClass: "notification",
  });

  form.reset();
});
