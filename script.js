function scrollToSection(id){

    document.getElementById(id).scrollIntoView({
        behavior:'smooth'
    });

}

// ===============================
// HORA EM TEMPO REAL
// ===============================

function atualizarHora(){

    const agora = new Date();

    const hora = agora.toLocaleTimeString('pt-BR');

    document.getElementById('hora-cascavel').innerHTML = 'Hora: ' + hora;
    document.getElementById('hora-curitiba').innerHTML = 'Hora: ' + hora;
    document.getElementById('hora-londrina').innerHTML = 'Hora: ' + hora;

}

setInterval(atualizarHora,1000);
atualizarHora();

// ===============================
// TEMPERATURA REAL
// ===============================

async function buscarTemperatura(){

    try{

        // CASCAVEL
        const cascavel = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-24.95&longitude=-53.45&current=temperature_2m');
        const dadosCascavel = await cascavel.json();

        document.getElementById('temp-cascavel').innerHTML =
            'Temperatura: ' + dadosC
