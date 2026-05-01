function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

window.onscroll = function () {
  document.querySelector(".topo").style.display =
    document.documentElement.scrollTop > 200 ? "block" : "none";
};

function topo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
});
