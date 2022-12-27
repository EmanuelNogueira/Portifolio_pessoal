/* Colocar a barra de navegação para aparecer quando descer o scrool */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("stick", window.scrollY > 0);
});

let meumenu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

function menu() {
  meumenu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
}

window.onscroll = () => {
  meumenu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

/* Animação do meu scroll */

const sr = ScrollReveal({
  distance: "45px",
  duration: 2700,
  reset: true,
});

sr.reveal(".menu-text", { delay: 350, origin: "left" });
sr.reveal(".menu-img", { delay: 1500, origin: "right" });
sr.reveal(".sub-service, .sobre, .cta, .portifolio, .servicos , .contato", {
  delay: 200,
  origin: "bottom",
});
