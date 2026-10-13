
document.getElementById("year").textContent =
  new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  formStatus.textContent =
    `Thank you, ${name}! Your form is ready, but message delivery requires a connected backend or email service.`;

  contactForm.reset();
});
