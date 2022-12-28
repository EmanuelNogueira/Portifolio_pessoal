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

/* Botão voltar ao topo */
let botao = document.querySelector(".box");
window.addEventListener("scroll", function () {
  if (window.scrollY < 800) {
    botao.style.display = "none";
  } else {
    botao.style.display = "block";
  }
});

// Obtém a posição atual do scroll

setInterval(() => {
  /* Tamanho total da página */
  /* document.body.offsetHeight - Mostra o tamanho total da página */
  const scrollTotal = 3502; /* 3502 */
  /* Tamanho atual da página */
  const scrollPosition = window.pageYOffset; /* 2000 */
  const scrollResultado = (scrollPosition / scrollTotal) * 100;
  /* 56% */

  // Usa uma expressão regular para substituir tudo o que não for dígito por nada
  /* Arredondando os números */
  var arredondado = Math.round(scrollResultado);

  let circle = document.querySelector(".circle-2");
  let circleresult = (arredondado / 220) * 220 * 2.4;

  console.log(circleresult);
  circle.style = `stroke-dashoffset: ${circleresult};`;
}, 50);

function enviarbotaao() {}
