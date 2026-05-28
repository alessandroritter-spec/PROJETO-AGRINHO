// CONFIGURAÇÃO DAS CIDADES DO PARANÁ
// Você pode adicionar ou remover cidades nesta lista seguindo o padrão
const cidades = [
    { nome: 'Curitiba', id: 'Curitiba,BR' },
    { nome: 'Cascavel', id: 'Cascavel,BR' },
    { nome: 'Londrina', id: 'Londrina,BR' },
    { nome: 'Maringá', id: 'Maringá,BR' }
];

// CHAVE DA API OPENWEATHERMAP
// IMPORTANTE: Substitua os 'xxxxxx' pela chave gratuita que você gera ao se cadastrar em https://openweathermap.org
const API_KEY = 'SUA_API_KEY_AQUI'; 

async function buscarClima() {
    const container = document.getElementById('clima-container');
    
    // Verificação de segurança caso o usuário esqueça de configurar a API Key
    if (API_KEY === 'SUA_API_KEY_AQUI') {
        container.innerHTML = `
            <div class="col-span-full p-4 bg-amber-50 text-amber-800 rounded-lg text-sm text-center border border-amber-200">
                <i class="fa-solid fa-triangle-exclamation mr-2 text-base"></i> 
                <strong>Configuração necessária:</strong> Para exibir o clima em tempo real das cidades do Paraná, 
                insira sua <code>API_KEY</code> obtida gratuitamente no site OpenWeatherMap dentro do arquivo <code>script.js</code>.
            </div>`;
        return;
    }

    // Limpa o texto de "Carregando..."
    container.innerHTML = ''; 

    // Loop para buscar as informações de cada cidade da lista
    for (let cidade of cidades) {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade.id}&appid=${API_KEY}&units=metric&lang=pt_br`;
            const resposta = await fetch(url);
            
            if (!resposta.ok) {
                throw new Error(`Erro na requisição da cidade: ${cidade.nome}`);
            }

            const dados = await resposta.json();

            // Extração das variáveis vindas da API
            const temperatura = Math.round(dados.main.temp);
            const umidade = dados.main.humidity;
            const descricao = dados.weather[0].description;
            const iconeCodigo = dados.weather[0].icon;

            // Injeta o HTML do card de clima formatado via Tailwind diretamente na página
            container.innerHTML += `
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center shadow-sm hover:bg-emerald-50/30 transition-colors">
                    <span class="font-bold text-gray-700 block text-lg">${cidade.nome}</span>
                    <img src="https://openweathermap.org/img/wn/${iconeCodigo}@2x.png" alt="${descricao}" class="w-16 h-16" title="${descricao}">
                    <span class="text-3xl font-black text-gray-900">${temperatura}°C</span>
                    <span class="text-xs text-gray-500 capitalize font-medium mt-1">${descricao}</span>
                    <span class="text-xs text-emerald-700 font-semibold mt-2 bg-emerald-100/60 px-2 py-0.5 rounded-full">
                        <i class="fa-solid fa-droplet text-xs mr-1"></i> UR: ${umidade}%
                    </span>
                </div>
            `;
        } catch (erro) {
            console.error("Não foi possível carregar os dados meteorológicos de " + cidade.nome, erro);
            
            // Caso uma cidade falhe, mostra um pequeno aviso visual para ela sem quebrar o resto do site
            container.innerHTML += `
                <div class="bg-red-50 p-4 rounded-xl border border-red-100 flex flex-col items-center justify-center text-center">
                    <span class="font-bold text-red-700 block">${cidade.nome}</span>
                    <i class="fa-solid fa-circle-xmark text-red-500 text-2xl my-2"></i>
                    <span class="text-xs text-red-600">Erro ao atualizar dados</span>
                </div>
            `;
        }
    }
}

// Dispara a função automaticamente assim que a página termina de carregar completamente
document.addEventListener('DOMContentLoaded', buscarClima);
