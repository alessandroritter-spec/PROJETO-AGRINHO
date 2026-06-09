/* ==========================================
   AGRO FORTE: FUTURO SUSTENTÁVEL
   Concurso Agrinho 2026
   script.js
   Desenvolvido em JavaScript puro
========================================== */

/* ==========================================
   VARIÁVEIS GLOBAIS
========================================== */

let respostasSimulador = {
    agua: 0,
    energia: 0,
    solo: 0
};

let pontuacaoQuiz = 0;

/* ==========================================
   INICIALIZAÇÃO DO SITE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Projeto Agro Forte: Futuro Sustentável carregado com sucesso.");

    configurarModoEscuro();
    configurarFraseDinamica();
    configurarSimulador();
    configurarQuiz();
    configurarCalculadora();
    configurarRolagemSuave();

});

/* ==========================================
   MODO ESCURO
========================================== */

function configurarModoEscuro() {

    const botaoModo = document.getElementById("modoEscuro");

    if (!botaoModo) return;

    botaoModo.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            botaoModo.textContent = "☀️ Modo Claro";

        } else {

            botaoModo.textContent = "🌙 Modo Escuro";

        }

    });

}

/* ==========================================
   FRASE DINÂMICA
========================================== */

function configurarFraseDinamica() {

    const frase = document.getElementById("fraseDinamica");

    if (!frase) return;

    const hora = new Date().getHours();

    let mensagem = "";

    if (hora >= 5 && hora < 12) {

        mensagem =
            "☀️ Bom dia! O campo acorda junto com quem cuida da terra.";

    } else if (hora >= 12 && hora < 18) {

        mensagem =
            "🌿 Cada decisão sustentável fortalece o futuro do planeta.";

    } else {

        mensagem =
            "🌙 Planejar hoje é garantir alimento e equilíbrio amanhã.";

    }

    frase.textContent = mensagem;

}

/* ==========================================
   CARDS AGRICULTURA INTELIGENTE
========================================== */

function mostrarInfo(id) {

    const elemento = document.getElementById(id);

    if (!elemento) return;

    if (elemento.style.display === "block") {

        elemento.style.display = "none";

    } else {

        elemento.style.display = "block";

    }

}

/* ==========================================
   SIMULADOR
========================================== */

function responderSimulador(tipo, valor) {

    respostasSimulador[tipo] = valor;

}

function configurarSimulador() {

    const botao =
        document.getElementById("resultadoSimulador");

    if (!botao) return;

    botao.addEventListener("click", () => {

        const total =
            respostasSimulador.agua +
            respostasSimulador.energia +
            respostasSimulador.solo;

        const resultado =
            document.getElementById("perfilSustentavel");

        if (!resultado) return;

        resultado.style.display = "block";

        if (total >= 25) {

            resultado.innerHTML = `
                <h3>🌎 Produtor Inovador</h3>

                <p>
                    Você demonstra forte compromisso com a sustentabilidade,
                    utilizando práticas que equilibram produtividade
                    e preservação ambiental.
                </p>
            `;

        } else if (total >= 15) {

            resultado.innerHTML = `
                <h3>🌱 Produtor Consciente</h3>

                <p>
                    Você já adota boas práticas sustentáveis,
                    mas ainda pode evoluir em alguns aspectos.
                </p>
            `;

        } else {

            resultado.innerHTML = `
                <h3>🚜 Produtor Tradicional</h3>

                <p>
                    Pequenas mudanças podem tornar a produção
                    mais eficiente e sustentável.
                </p>
            `;

        }

    });

}

/* ==========================================
   QUIZ
========================================== */

function responderQuiz(botao, correta) {

    const opcoes =
        botao.parentElement.querySelectorAll("button");

    opcoes.forEach(opcao => {

        opcao.disabled = true;

    });

    if (correta) {

        botao.classList.add("resposta-correta");

        pontuacaoQuiz++;

    } else {

        botao.classList.add("resposta-incorreta");

    }

}

function configurarQuiz() {

    const finalizarQuiz =
        document.getElementById("finalizarQuiz");

    if (!finalizarQuiz) return;

    finalizarQuiz.addEventListener("click", () => {

        const resultado =
            document.getElementById("resultadoQuiz");

        if (!resultado) return;

        resultado.style.display = "block";

        resultado.innerHTML = `
            <h3>Resultado do Quiz</h3>

            <p>
                Você acertou
                <strong>${pontuacaoQuiz}</strong>
                de
                <strong>3</strong>
                perguntas.
            </p>
        `;

    });

}

/* ==========================================
   CALCULADORA DE SUSTENTABILIDADE
========================================== */

function configurarCalculadora() {

    const botao =
        document.getElementById("calcularPegada");

    if (!botao) return;

    botao.addEventListener("click", () => {

        let pontos = 0;

        if (document.getElementById("solar")?.checked) {
            pontos++;
        }

        if (document.getElementById("reuso")?.checked) {
            pontos++;
        }

        if (document.getElementById("rotacao")?.checked) {
            pontos++;
        }

        if (document.getElementById("preservacao")?.checked) {
            pontos++;
        }

        const resultado =
            document.getElementById("resultadoPegada");

        if (!resultado) return;

        resultado.style.display = "block";

        if (pontos === 4) {

            resultado.innerHTML = `
                <h3>🌟 Excelente!</h3>

                <p>
                    Seu nível de sustentabilidade é muito alto.
                    Você demonstra compromisso com o futuro do planeta.
                </p>
            `;

        } else if (pontos >= 2) {

            resultado.innerHTML = `
                <h3>🌿 Muito Bom!</h3>

                <p>
                    Você já pratica ações importantes,
                    mas ainda pode evoluir.
                </p>
            `;

        } else {

            resultado.innerHTML = `
                <h3>🌱 Há Espaço para Crescer</h3>

                <p>
                    Pequenas mudanças podem gerar grandes impactos positivos.
                </p>
            `;

        }

    });

}

/* ==========================================
   MENU COM ROLAGEM SUAVE
========================================== */

function configurarRolagemSuave() {

    const links =
        document.querySelectorAll(".menu a");

    links.forEach(link => {

        link.addEventListener("click", (evento) => {

            evento.preventDefault();

            const destino =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (destino) {

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

}
