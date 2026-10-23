const inputNome = document.getElementById("nome");
const inputIdade = document.getElementById("idade");
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const nome = inputNome.value;
  const idade = inputIdade.value;

  resultado.classList.remove( 
    "d-none", 
    "alert-success", 
    "alert-danger", 
    "alert-warning" 
  );

  if (idade >= 18) {
    resultado.textContent = nome + " é maior de idade.";
    resultado.classList.add("alert-success");
  } else {
    resultado.textContent ="Opa " + nome + ", O que você ta tentando seu SAFADÃO?";
    resultado.classList.remove("alert-success");
    resultado.classList.add("alert-danger");
  }

  resultado.classList.remove("d-none");
});