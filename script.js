// ===============================
// MODO ESCURO
// ===============================

const botaoModo = document.getElementById("modoEscuro");

botaoModo.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});


// ===============================
// QUIZ INTERATIVO
// ===============================

const perguntas = [

    {
        pergunta: "Qual tecnologia ajuda a economizar água no campo?",
        respostas: [
            "Irrigação Inteligente",
            "Computador Gamer",
            "Impressora"
        ],
        correta: 0
    },

    {
        pergunta: "Qual tecnologia utiliza sensores no agro?",
        respostas: [
            "IoT",
            "DVD",
            "Televisão"
        ],
        correta: 0
    },

    {
        pergunta: "Qual energia é considerada limpa?",
        respostas: [
            "Carvão",
            "Solar",
            "Gasolina"
        ],
        correta: 1
    },

    {
        pergunta: "O uso de drones no agro ajuda em:",
        respostas: [
            "Monitoramento da plantação",
            "Aumentar lixo",
            "Desmatar áreas"
        ],
        correta: 0
    }

];

let perguntaAtual = 0;
let pontos = 0;

const perguntaElemento = document.getElementById("pergunta");
const respostasElemento = document.getElementById("respostas");
const pontuacaoElemento = document.getElementById("pontuacao");
const botaoProxima = document.getElementById("proxima");

function carregarPergunta(){

    respostasElemento.innerHTML = "";

    let pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent = pergunta.pergunta;

    pergunta.respostas.forEach((resposta, indice) => {

        const botao = document.createElement("button");

        botao.textContent = resposta;

        botao.addEventListener("click", () => verificarResposta(indice));

        respostasElemento.appendChild(botao);

    });

}

function verificarResposta(indice){

    if(indice === perguntas[perguntaAtual].correta){

        pontos++;

        alert("✅ Resposta correta!");

    } else {

        alert("❌ Resposta incorreta!");

    }

}

botaoProxima.addEventListener("click", () => {

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){

        carregarPergunta();

    } else {

        perguntaElemento.textContent = "Quiz finalizado!";

        respostasElemento.innerHTML = "";

        pontuacaoElemento.textContent =
        "🏆 Sua pontuação foi: " + pontos + " de " + perguntas.length;

        botaoProxima.style.display = "none";

    }

});

carregarPergunta();
