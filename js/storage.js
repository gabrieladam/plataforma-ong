// js/storage.js
function saveFormData(formData) {
  localStorage.setItem("cadastro", JSON.stringify(formData));
}

function getFormData() {
  return JSON.parse(localStorage.getItem("cadastro")) || {};
}