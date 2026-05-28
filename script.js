// ======================================
// AGUARDA CARREGAMENTO DA PÁGINA
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // MODO ESCURO
    // ======================================

    const botaoModo = document.getElementById("modoEscuro");

    if (botaoModo) {

        botaoModo.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

        });

    }

    // ======================================
    // ELEMENTOS DO QUIZ
    // ======================================

    const perguntaElemento =
        document.getElementById("pergunta");

    const respostasElemento =
        document.getElementById("respostas");

    const pontuacaoElemento =
        document.getElementById("pontuacao");

    const botaoProxima =
        document.getElementById("proxima");

    // Verifica se os elementos existem
    if (
        !perguntaElemento ||
        !respostasElemento ||
        !pontuacaoElemento ||
        !botaoProxima
    ) {

        console.error("Elementos do quiz não encontrados.");

        return;
    }

    // ======================================
    // PERGUNTAS
    // ======================================

    const perguntas = [

        {
            pergunta:
                "Qual tecnologia ajuda a economizar água no campo?",

            respostas: [
                "Irrigação Inteligente",
                "Computador Gamer",
                "Impressora"
            ],

            correta: 0
        },

        {
            pergunta:
                "Qual tecnologia utiliza sensores no agro?",

            respostas: [
                "IoT",
                "DVD",
                "Televisão"
            ],

            correta: 0
        },

        {
            pergunta:
                "Qual energia é considerada limpa?",

            respostas: [
                "Carvão",
                "Solar",
                "Gasolina"
            ],

            correta: 1
        },

        {
            pergunta:
                "O uso de drones no agro ajuda em:",

            respostas: [
                "Monitoramento da plantação",
                "Aumentar lixo",
                "Desmatar áreas"
            ],

            correta: 0
        }

    ];

    // ======================================
    // VARIÁVEIS
    // ======================================

    let perguntaAtual = 0;
    let pontos = 0;
    let respondeu = false;

    // ======================================
    // CARREGAR PERGUNTA
    // ======================================

    function carregarPergunta() {

        respondeu = false;

        respostasElemento.innerHTML = "";

        const pergunta =
            perguntas[perguntaAtual];

        perguntaElemento.textContent =
            pergunta.pergunta;

        pergunta.respostas.forEach(
            (resposta, indice) => {

                const botao =
                    document.createElement("button");

                botao.textContent = resposta;

                botao.classList.add("resposta-btn");

                botao.addEventListener(
                    "click",
                    () => verificarResposta(indice)
                );

                respostasElemento.appendChild(botao);

            }
        );

    }

    // ======================================
    // VERIFICAR RESPOSTA
    // ======================================

    function verificarResposta(indiceSelecionado) {

        if (respondeu) {
            return;
        }

        respondeu = true;

        const respostaCorreta =
            perguntas[perguntaAtual].correta;

        const botoes =
            respostasElemento.querySelectorAll("button");

        botoes.forEach((botao, indice) => {

            botao.disabled = true;

            // Resposta correta
            if (indice === respostaCorreta) {

                botao.style.backgroundColor = "#00c853";

                botao.style.color = "white";

            }

            // Resposta errada
            if (
                indice === indiceSelecionado &&
                indice !== respostaCorreta
            ) {

                botao.style.backgroundColor = "#d50000";

                botao.style.color = "white";

            }

        });

        // Atualiza pontuação
        if (indiceSelecionado === respostaCorreta) {

            pontos++;

            pontuacaoElemento.innerHTML =
                "✅ Resposta correta!";

        } else {

            pontuacaoElemento.innerHTML =
                "❌ Resposta incorreta!";

        }

    }

    // ======================================
    // PRÓXIMA PERGUNTA
    // ======================================

    botaoProxima.addEventListener("click", () => {

        if (!respondeu) {

            alert(
                "Responda a pergunta antes de continuar!"
            );

            return;

        }

        perguntaAtual++;

        // Próxima pergunta
        if (perguntaAtual < perguntas.length) {

            carregarPergunta();

            pontuacaoElemento.innerHTML = "";

        } else {

            finalizarQuiz();

        }

    });

    // ======================================
    // FINALIZAR QUIZ
    // ======================================

    function finalizarQuiz() {

        perguntaElemento.innerHTML =
            "🎉 Quiz Finalizado!";

        respostasElemento.innerHTML = "";

        pontuacaoElemento.innerHTML =
            `
            🏆 Você acertou
            <strong>${pontos}</strong>
            de
            <strong>${perguntas.length}</strong>
            perguntas!
            `;

        botaoProxima.innerText =
            "🔄 Reiniciar Quiz";

        botaoProxima.addEventListener(
            "click",
            reiniciarQuiz
        );

    }

    // ======================================
    // REINICIAR QUIZ
    // ======================================

    function reiniciarQuiz() {

        perguntaAtual = 0;

        pontos = 0;

        respondeu = false;

        botaoProxima.innerText =
            "Próxima Pergunta";

        pontuacaoElemento.innerHTML = "";

        carregarPergunta();

    }

    // ======================================
    // INICIAR QUIZ
    // ======================================

    carregarPergunta();

});
