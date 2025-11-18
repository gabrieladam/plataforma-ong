// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = e.target.getAttribute("href");
      loadPage(page);
    });
  });

  function loadPage(page) {
    fetch(page)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        main.innerHTML = doc.querySelector("main").innerHTML;
      });
  }
});


// js/app.js
function cardTemplate(title, description, image) {
  return `
    <div class="card">
      <img src="${image}" alt="${title}">
      <h3>${title}</h3>
      <p>${description}</p>
      <button class="btn">Saiba mais</button>
    </div>
  `;
}

// Exemplo de uso:
document.querySelector("main").innerHTML += cardTemplate(
  "Projeto Educação",
  "Apoie crianças em sala comunitária.",
  "images/projeto1.jpg"
);