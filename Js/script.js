const inputNome = document.getElementById("nome");
const inputIdade = document.getElementById("idade");
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  const nome = inputNome.value;
  const idade = inputIdade.value;

  alert(nome + " === " + idade);
});