// Cidades do Paraná para monitoramento
const cidades = [
    { nome: 'Curitiba', id: 'Curitiba,BR' },
    { nome: 'Cascavel', id: 'Cascavel,BR' },
    { nome: 'Londrina', id: 'Londrina,BR' },
    { nome: 'Maringá', id: 'Maringá,BR' }
];

// ATENÇÃO: Substitua os 'xxxxxx' pela sua chave gerada no https://openweathermap.org
const API_KEY = 'SUA_API_KEY_AQUI'; 

async function buscarClima() {
    const container = document.getElementById('clima-container');
    
    // Se o elemento não existir na página ainda, interrompe para não dar erro no console
    if (!container) return;

    // Alerta caso a API KEY não tenha sido trocada
    if (API_KEY === 'SUA_API_KEY_AQUI') {
        container.innerHTML = `
            <div class="col-span-full p-4 bg-amber-50 text-amber-800 rounded-lg text-sm border border-amber-200">
                <i class="fa-solid fa-triangle-exclamation mr-2"></i>
                <strong>Quase pronto!</strong> Para ativar o clima em tempo real, insira sua chave <code>API_KEY</code> do OpenWeatherMap dentro do arquivo <code>script.js</code>.
            </div>`;
        return;
    }

    container.innerHTML = ''; // Limpa o "Carregando..."

    for (let cidade of cidades) {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade.id}&appid=${API_KEY}&units=metric&lang=pt_br`;
            const resposta = await fetch(url);
            
            if (!resposta.ok) throw new Error('Falha na resposta da API');

            const dados = await resposta.json();

            const temp = Math.round(dados.main.temp);
            const umidade = dados.main.humidity;
            const desc = dados.weather[0].description;
            const icone = dados.weather[0].icon;

            container.innerHTML += `
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center shadow-sm">
                    <span class="font-bold text-gray-700 block text-base">${cidade.nome}</span>
                    <img src="https://openweathermap.org/img/wn/${icone}@2x.png" alt="${desc}" class="w-14 h-14">
                    <span class="text-2xl font-black text-gray-900">${temp}°C</span>
                    <span class="text-xs text-gray-500 capitalize mt-0.5">${desc}</span>
                    <span class="text-xs text-emerald-700 font-semibold mt-2 bg-emerald-100/50 px-2 py-0.5 rounded-full">
                        <i class="fa-solid fa-droplet text-xs mr-1"></i> UR: ${umidade}%
                    </span>
                </div>
            `;
        } catch (erro) {
            console.error("Erro ao carregar cidade: " + cidade.nome, erro);
            container.innerHTML += `
                <div class="bg-red-50 p-4 rounded-xl border border-red-100 flex flex-col items-center justify-center">
                    <span class="font-bold text-red-700">${cidade.nome}</span>
                    <i class="fa-solid fa-circle-xmark text-red-400 my-2"></i>
                    <span class="text-xs text-red-500">Erro de conexão</span>
                </div>`;
        }
    }
}

// Executa com segurança após o carregamento da janela
window.addEventListener('DOMContentLoaded', buscarClima);
