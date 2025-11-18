// js/formValidation.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", e => {
    let valid = true;
    const email = document.querySelector("#email");
    const cpf = document.querySelector("#cpf");

    if (!email.value.includes("@")) {
      alert("E-mail inválido!");
      valid = false;
    }

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf.value)) {
      alert("CPF inválido! Use o formato 000.000.000-00");
      valid = false;
    }

    if (!valid) e.preventDefault();
  });
});