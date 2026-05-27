O problema acontece porque o usuário pode clicar várias vezes na resposta e somar pontos infinitamente. Além disso, após responder, a pergunta não trava corretamente.

Substitua todo o conteúdo do seu `script.js` por este código corrigido:

```javascript
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
let respondeu = false;

const perguntaElemento = document.getElementById("pergunta");
const respostasElemento = document.getElementById("respostas");
const pontuacaoElemento = document.getElementById("pontuacao");
const botaoProxima = document.getElementById("proxima");


// ===============================
// CARREGAR PERGUNTA
// ===============================

function carregarPergunta() {

    respondeu = false;

    respostasElemento.innerHTML = "";

    let pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent = pergunta.pergunta;

    pergunta.respostas.forEach((resposta, indice) => {

        const botao = document.createElement("button");

        botao.textContent = resposta;

        botao.classList.add("resposta-btn");

        botao.addEventListener("click", () => verificarResposta(indice));

        respostasElemento.appendChild(botao);

    });

}


// ===============================
// VERIFICAR RESPOSTA
// ===============================

function verificarResposta(indice) {

    // impede responder várias vezes
    if (respondeu) {
        return;
    }

    respondeu = true;

    const botoes = respostasElemento.querySelectorAll("button");

    botoes.forEach((botao, i) => {

        botao.disabled = true;

        if (i === perguntas[perguntaAtual].correta) {

            botao.style.backgroundColor = "green";
            botao.style.color = "white";

        }

        if (
            i === indice &&
            i !== perguntas[perguntaAtual].correta
        ) {

            botao.style.backgroundColor = "red";
            botao.style.color = "white";

        }

    });

    if (indice === perguntas[perguntaAtual].correta) {

        pontos++;

        pontuacaoElemento.textContent =
            "✅ Resposta correta!";

    } else {

        pontuacaoElemento.textContent =
            "❌ Resposta incorreta!";

    }

}


// ===============================
// PRÓXIMA PERGUNTA
// ===============================

botaoProxima.addEventListener("click", () => {

    // impede avançar sem responder
    if (!respondeu) {

        alert("Responda a pergunta antes de continuar!");

        return;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        carregarPergunta();

        pontuacaoElemento.textContent = "";

    } else {

        perguntaElemento.textContent =
            "🎉 Quiz finalizado!";

        respostasElemento.innerHTML = "";

        pontuacaoElemento.textContent =
            "🏆 Sua pontuação foi: " +
            pontos +
            " de " +
            perguntas.length;

        botaoProxima.style.display = "none";

    }

});


// ===============================
// INICIAR QUIZ
// ===============================

carregarPergunta();
```
