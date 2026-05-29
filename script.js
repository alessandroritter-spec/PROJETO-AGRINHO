// ====== INTERATIVIDADE DAS TECNOLOGIAS (MODAL) ======
function openModal(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('techModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('techModal').style.display = 'none';
}

// Fechar o modal se clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('techModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// ====== ALTERNADOR DE MODO ESCURO (DARK MODE) ======
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});

// ====== LOGICA DO MINI-GAME "FAZENDA SUSTENTÁVEL" ======
let score = 100;
let sustainability = 50;

function playTurn(choice) {
    const feedback = document.getElementById('game-feedback');
    const scoreText = document.getElementById('score');
    const sustText = document.getElementById('sust-level');

    if (choice === 'biologico') {
        score += 20;
        sustainability += 15;
        feedback.innerText = "Excelente escolha! Os predadores naturais controlaram as pragas sem poluir o solo. (+20 Pontos, +15% Sustentabilidade)";
    } else if (choice === 'agrotoxico') {
        score += 30;
        sustainability -= 20;
        feedback.innerText = "Você eliminou as pragas rápido, mas contaminou o lençol freático local e perdeu biodiversidade. (+30 Pontos, -20% Sustentabilidade)";
    } else if (choice === 'solar') {
        score -= 15; // Custo de investimento
        sustainability += 25;
        feedback.innerText = "Investimento feito! Agora sua fazenda gera energia 100% limpa e reduziu a pegada de carbono. (-15 Custo, +25% Sustentabilidade)";
    } else if (choice === 'Desmatar') {
        score += 40;
        sustainability -= 35;
        feedback.innerText = "A produção aumentou no curto prazo, mas a ausência de árvores causou erosão severa no solo após a chuva. (+40 Pontos, -35% Sustentabilidade)";
    }

    // Limites dos atributos
    sustainability = Math.max(0, Math.min(100, sustainability));
    
    // Atualiza a tela
    scoreText.innerText = score;
    sustText.innerText = sustainability + "%";

    // Validação de Fim de Jogo Espontâneo
    if (sustainability <= 15) {
        feedback.innerHTML = "<strong>Alerta Crítico:</strong> Sua fazenda está enfrentando sanções ambientais graves devido à baixa sustentabilidade!";
    } else if (sustainability >= 85) {
        feedback.innerHTML = "<strong>Parabéns!</strong> Sua propriedade ganhou o selo internacional de 'Fazenda Modelo Agro 2050'.";
    }
}
