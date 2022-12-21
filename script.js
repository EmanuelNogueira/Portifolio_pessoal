/* Colocar a barra de navegação para aparecer quando descer o scrool */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("stick", window.scrollY > 0);
});
