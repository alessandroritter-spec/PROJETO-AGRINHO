function iniciarQuiz() {
  document.getElementById("quiz").innerHTML = `
    <p>Qual prática é sustentável?</p>
    <button onclick="resposta(true)">Plantio consciente</button>
    <button onclick="resposta(false)">Desmatamento</button>
  `;
}

function resposta(correta) {
  if (correta) {
    alert("Correto!");
  } else {
    alert("Errado!");
  }
}
