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
const cascavel = await fetch('https://api.open-meteo.com/v1/forecast?
latitude=-24.95&longitude=-53.45&current=temperature_2m');
const dadosCascavel = await cascavel.json();
document.getElementById('temp-cascavel').innerHTML =
'Temperatura: ' + dadosCascavel.current.temperature_2m + '°C';
// CURITIBA
const curitiba = await fetch('https://api.open-meteo.com/v1/forecast?
latitude=-25.42&longitude=-49.27&current=temperature_2m');
const dadosCuritiba = await curitiba.json();
11
document.getElementById('temp-curitiba').innerHTML =
'Temperatura: ' + dadosCuritiba.current.temperature_2m + '°C';
// LONDRINA
const londrina = await fetch('https://api.open-meteo.com/v1/forecast?
latitude=-23.31&longitude=-51.16&current=temperature_2m');
const dadosLondrina = await londrina.json();
document.getElementById('temp-londrina').innerHTML =
'Temperatura: ' + dadosLondrina.current.temperature_2m + '°C';
}
catch(error){
console.log(error);
}
}
buscarTemperatura();
// ===============================
// MINI GAME
// ===============================
const gameArea = document.getElementById('game-area');
const scoreElement = document.getElementById('score');
let score = 0;
function criarArvore(){
const arvore = document.createElement('div');
arvore.classList.add('tree');
arvore.innerHTML = '🌳';
arvore.style.left = Math.random() * 90 + '%';
arvore.style.top = Math.random() * 80 + '%';
arvore.addEventListener('click',()=>{
score++;
scoreElement.innerHTML = score;
arvore.remove();
});
gameArea.appendChild(arvore);
12
setTimeout(()=>{
arvore.remove();
},2000);
}
setInterval(criarArvore,800);
