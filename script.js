/* ==========================================
   AGRO FORTE: FUTURO SUSTENTÁVEL
   Concurso Agrinho 2026
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MODO ESCURO
    ========================================== */

    const botaoModo = document.getElementById("modoEscuro");

    botaoModo.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            botaoModo.textContent = "☀️ Modo Claro";
        } else {
            botaoModo.textContent = "🌙 Modo Escuro";
        }

    });

    /* ==========================================
       FRASE DINÂMICA
    ========================================== */

    const frase = document.getElementById("fraseDinamica");

    const hora = new Date().getHours();

    let mensagem = "";

    if (hora >= 5 && hora < 12) {

        mensagem =
            "☀️ Bom dia! O campo acorda junto com quem cuida da terra.";

    } else if (hora >= 12 && hora < 18) {

        mensagem =
            "🌿 A sustentabilidade é cultivada em cada decisão tomada.";

    } else {

        mensagem =
            "🌙 Planejar hoje garante alimento e equilíbrio amanhã.";

    }

    frase.textContent = mensagem;

    /* ==========================================
       BOTÃO EXPLORAR
    ========================================== */

    const explorar = document.getElementById("explorar");

    explorar.addEventListener("click", () => {

        document
            .getElementById("agricultura")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* ==========================================
   CARDS EXPANSÍVEIS
========================================== */

function mostrarInfo(id){

    const elemento = document.getElementById(id);

    if(elemento.style.display === "block"){

        elemento.style.display = "none";

    }else{

        elemento.style.display = "block";

    }

}


/* ==========================================
   SIMULADOR SUSTENTÁVEL
========================================== */

let respostasSimulador = {
    agua: 0,
    energia: 0,
    solo: 0
};

function responderSimulador(tipo, valor){

    respostasSimulador[tipo] = valor;

}


/* Resultado do simulador */

const botaoResultado = document.getElementById("resultadoSimulador");

if(botaoResultado){

    botaoResultado.addEventListener("click", () => {

        const total =
            respostasSimulador.agua +
            respostasSimulador.energia +
            respostasSimulador.solo;

        const resultado =
            document.getElementById("perfilSustentavel");

        resultado.style.display = "block";

        if(total >= 25){

            resultado.innerHTML = `
                <h3>🌎 Produtor Inovador</h3>
                <p>
                    Você demonstra forte compromisso com a sustentabilidade
                    e utiliza práticas modernas para preservar os recursos naturais.
                </p>
            `;

        }else if(total >= 15){

            resultado.innerHTML = `
                <h3>🌱 Produtor Consciente</h3>
                <p>
                    Você adota algumas práticas sustentáveis,
                    mas ainda pode evoluir para reduzir impactos ambientais.
                </p>
            `;

        }else{

            resultado.innerHTML = `
                <h3>🚜 Produtor Tradicional</h3>
                <p>
                    Reavaliar algumas escolhas pode contribuir para um futuro
                    mais equilibrado entre produção e meio ambiente.
                </p>
            `;

        }

    });

}


/* ==========================================
   QUIZ AGRINHO
========================================== */

let pontuacaoQuiz = 0;

let perguntasRespondidas = 0;

function responderQuiz(botao, correta){

    const opcoes =
        botao.parentElement.querySelectorAll("button");

    opcoes.forEach(opcao => {

        opcao.disabled = true;

    });

    if(correta){

        botao.classList.add("resposta-correta");

        pontuacaoQuiz++;

    }else{

        botao.classList.add("resposta-incorreta");

    }

    perguntasRespondidas++;

}


/* Resultado do Quiz */

const finalizarQuiz =
    document.getElementById("finalizarQuiz");

if(finalizarQuiz){

    finalizarQuiz.addEventListener("click", () => {

        const resultadoQuiz =
            document.getElementById("resultadoQuiz");

        resultadoQuiz.style.display = "block";

        resultadoQuiz.innerHTML = `
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

const calcular =
    document.getElementById("calcularPegada");

if(calcular){

    calcular.addEventListener("click", () => {

        let pontos = 0;

        if(document.getElementById("solar").checked){

            pontos += 1;

        }

        if(document.getElementById("reuso").checked){

            pontos += 1;

        }

        if(document.getElementById("rotacao").checked){

            pontos += 1;

        }

        if(document.getElementById("preservacao").checked){

            pontos += 1;

        }

        const resultado =
            document.getElementById("resultadoPegada");

        resultado.style.display = "block";

        if(pontos === 4){

            resultado.innerHTML = `
                <h3>🌟 Excelente!</h3>

                <p>
                    Seu nível de sustentabilidade é muito alto.
                    Você demonstra compromisso com o futuro do planeta.
                </p>
            `;

        }else if(pontos >= 2){

            resultado.innerHTML = `
                <h3>🌿 Muito Bom!</h3>

                <p>
                    Você já pratica ações importantes,
                    mas ainda pode evoluir em alguns aspectos.
                </p>
            `;

        }else{

            resultado.innerHTML = `
                <h3>🌱 Há Espaço para Crescer</h3>

                <p>
                    Pequenas mudanças nas suas escolhas podem gerar
                    grandes impactos positivos no meio ambiente.
                </p>
            `;

        }

    });

}


/* ==========================================
   MENSAGEM NO CONSOLE
========================================== */

console.log(
    "Projeto Agro Forte: Futuro Sustentável carregado com sucesso."
);
