# AGRO FORTE, FUTURO SUSTENTÁVEL: EQUILÍBRIOENTRE PRODUÇÃO E MEIO AMBIENTE 

PROJETO DESENVOLVIDO PARA O CONCURSO AGRINHO 
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<title>Agro Forte - Futuro Sustentável</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<style>

/* =========================
   RESET
========================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins', sans-serif;
    background:#f5fff5;
    color:#222;
    overflow-x:hidden;
}

/* =========================
   HEADER
========================= */

header{
    width:100%;
    background:linear-gradient(135deg,#0a5f2c,#1f8f3c,#52b788);
    padding:20px 8%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    box-shadow:0 4px 10px rgba(0,0,0,0.2);
}

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo{
    font-size:2rem;
    font-weight:700;
    color:white;
}

.logo span{
    color:#d8ff9d;
}

nav ul{
    display:flex;
    gap:25px;
    list-style:none;
}

nav ul li a{
    text-decoration:none;
    color:white;
    font-weight:500;
    transition:0.3s;
}

nav ul li a:hover{
    color:#d8ff9d;
}

/* =========================
   HERO
========================= */

.hero{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    background:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop') center/cover;
    color:white;
    padding:120px 20px 50px;
}

.hero-content h1{
    font-size:4rem;
    margin-bottom:20px;
}

.hero-content p{
    font-size:1.3rem;
    max-width:800px;
    margin:auto;
    margin-bottom:30px;
}

.btn{
    display:inline-block;
    padding:15px 35px;
    background:#d8ff9d;
    color:#0a5f2c;
    border-radius:40px;
    text-decoration:none;
    font-weight:700;
    transition:0.3s;
}

.btn:hover{
    transform:scale(1.05);
    background:white;
}

/* =========================
   SECTIONS
========================= */

section{
    padding:100px 8%;
}

.section-title{
    text-align:center;
    margin-bottom:60px;
}

.section-title h2{
    font-size:2.8rem;
    color:#0a5f2c;
}

.section-title p{
    margin-top:10px;
    color:#555;
}

/* =========================
   CARDS
========================= */

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.card{
    background:white;
    border-radius:20px;
    padding:30px;
    text-align:center;
    box-shadow:0 5px 15px rgba(0,0,0,0.1);
    transition:0.4s;
}

.card:hover{
    transform:translateY(-10px);
}

.card img{
    width:100%;
    height:180px;
    object-fit:cover;
    border-radius:15px;
    margin-bottom:20px;
}

.card h3{
    color:#0a5f2c;
    margin-bottom:10px;
}

/* =========================
   TECNOLOGIA
========================= */

.tech{
    background:#e8fff0;
}

.tech-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:30px;
}

.tech-item{
    background:white;
    padding:20px;
    border-radius:20px;
    box-shadow:0 4px 10px rgba(0,0,0,0.1);
}

.tech-item iframe{
    width:100%;
    height:220px;
    border:none;
    border-radius:15px;
    margin-bottom:15px;
}

/* =========================
   CLIMA
========================= */

.weather{
    text-align:center;
    background:linear-gradient(135deg,#52b788,#95d5b2);
    color:white;
    border-radius:25px;
    padding:40px;
}

.weather h3{
    font-size:2rem;
    margin-bottom:20px;
}

.temp{
    font-size:4rem;
    font-weight:bold;
}

/* =========================
   GAME
========================= */

.game-section{
    background:#f1fff1;
}

#game{
    margin:auto;
    display:block;
    background:#8fd694;
    border:5px solid #0a5f2c;
    border-radius:20px;
}

/* =========================
   NEWS
========================= */

.news-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:25px;
}

.news-card{
    background:white;
    border-radius:20px;
    overflow:hidden;
    box-shadow:0 4px 15px rgba(0,0,0,0.1);
}

.news-card img{
    width:100%;
    height:200px;
    object-fit:cover;
}

.news-content{
    padding:20px;
}

.news-content h3{
    color:#0a5f2c;
    margin-bottom:10px;
}

/* =========================
   FOOTER
========================= */

footer{
    background:#0a5f2c;
    color:white;
    text-align:center;
    padding:30px;
}

/* =========================
   RESPONSIVO
========================= */

@media(max-width:768px){

.hero-content h1{
    font-size:2.5rem;
}

nav{
    flex-direction:column;
    gap:15px;
}

nav ul{
    flex-wrap:wrap;
    justify-content:center;
}

}

</style>
</head>

<body>

<!-- HEADER -->

<header>
<nav>

<div class="logo">
🌱 Agro<span>Forte</span>
</div>

<ul>
<li><a href="#inicio">Início</a></li>
<li><a href="#sustentabilidade">Sustentabilidade</a></li>
<li><a href="#tecnologia">Tecnologia</a></li>
<li><a href="#clima">Clima</a></li>
<li><a href="#jogo">Jogo</a></li>
<li><a href="#noticias">Notícias</a></li>
</ul>

</nav>
</header>

<!-- HERO -->

<section class="hero" id="inicio">

<div class="hero-content">

<h1>Agro Forte, Futuro Sustentável</h1>

<p>
Equilíbrio entre produção agrícola, tecnologia e preservação ambiental para construir o futuro do planeta.
</p>

<a href="#sustentabilidade" class="btn">
Explorar Projeto
</a>

</div>

</section>

<!-- SUSTENTABILIDADE -->

<section id="sustentabilidade">

<div class="section-title">
<h2>🌎 Sustentabilidade no Campo</h2>
<p>Produzir alimentos preservando o meio ambiente.</p>
</div>

<div class="cards">

<div class="card">
<img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop">
<h3>Irrigação Inteligente</h3>
<p>
Uso consciente da água com sensores e monitoramento.
</p>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop">
<h3>Energia Limpa</h3>
<p>
Fazendas utilizando energia solar e renovável.
</p>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop">
<h3>Preservação Ambiental</h3>
<p>
Proteção das florestas, rios e biodiversidade.
</p>
</div>

</div>

</section>

<!-- TECNOLOGIA -->

<section class="tech" id="tecnologia">

<div class="section-title">
<h2>🤖 Tecnologia no Agro</h2>
<p>O futuro da agricultura inteligente.</p>
</div>

<div class="tech-grid">

<div class="tech-item">

<div class="tech-item">

<iframe 
width="100%" 
height="220"
src="https://www.youtube.com/embed/DGHn2uOAVCE"
title="Máquinas Inteligentes no Agro"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>

<h3>Máquinas Inteligentes</h3>

<p>
Automação agrícola, tratores modernos e tecnologia aplicada à produção sustentável.
</p>

</div>

<div class="tech-item">

<iframe 
src="https://youtu.be/xyOAjOtAs5M?si=5ww2YCWoRuoRrDJ5"
title="Máquinas Agrícolas Inteligentes"
allowfullscreen>
</iframe>

<h3>Máquinas Inteligentes</h3>

<p>
Automação e eficiência para produção sustentável.
</p>

</div>

</div>

</section>

<!-- CLIMA -->

<section id="clima">

<div class="section-title">
<h2>🌦️ Clima Atual</h2>
<p>Monitoramento climático do Paraná.</p>
</div>

<div class="weather">

<h3>Cascavel - Paraná</h3>

<div class="temp" id="temperatura">
25°C
</div>

<p id="climaTexto">
Tempo ensolarado ☀️
</p>

</div>

</section>

<!-- GAME -->

<section class="game-section" id="jogo">

<div class="section-title">
<h2>🎮 Fazenda Sustentável</h2>
<p>Recolha árvores e preserve o meio ambiente.</p>
</div>

<canvas id="game" width="700" height="400"></canvas>

</section>

<!-- NOTÍCIAS -->

<section id="noticias">

<div class="section-title">
<h2>📰 Novidades do Agro</h2>
<p>Inovação, sustentabilidade e tecnologia.</p>
</div>

<div class="news-grid">

<div class="news-card">

<img src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1200&auto=format&fit=crop">

<div class="news-content">

<h3>Energia Solar no Campo</h3>

<p>
Fazendas brasileiras investem em energia renovável.
</p>

</div>

</div>

<div class="news-card">

<img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop">

<div class="news-content">

<h3>Agricultura Inteligente</h3>

<p>
Tecnologias aumentam produtividade com sustentabilidade.
</p>

</div>

</div>

<div class="news-card">

<img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop">

<div class="news-content">

<h3>Preservação Ambiental</h3>

<p>
Projetos de reflorestamento crescem no Brasil.
</p>

</div>

</div>

</div>

</section>

<!-- FOOTER -->

<footer>

<p>
🌱 Agro Forte - Futuro Sustentável © 2026
</p>

</footer>

<!-- JAVASCRIPT -->

<script>

/* =========================
   CLIMA DINÂMICO
========================= */

const temperaturas = [
    "22°C",
    "24°C",
    "25°C",
    "27°C",
    "29°C"
];

const climas = [
    "Tempo ensolarado ☀️",
    "Possibilidade de chuva 🌧️",
    "Clima agradável 🌿",
    "Parcialmente nublado ⛅"
];

function atualizarClima(){

    const temp =
    temperaturas[Math.floor(Math.random() * temperaturas.length)];

    const clima =
    climas[Math.floor(Math.random() * climas.length)];

    document.getElementById("temperatura").innerText = temp;

    document.getElementById("climaTexto").innerText = clima;
}

setInterval(atualizarClima,4000);

/* =========================
   GAME
========================= */

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = {
    x:50,
    y:170,
    width:50,
    height:50,
    color:"#0a5f2c",
    speed:6
};

let trees = [];

function createTree(){

    trees.push({
        x:700,
        y:Math.random() * 350,
        size:30
    });

}

setInterval(createTree,1500);

let score = 0;

document.addEventListener("keydown",(e)=>{

    if(e.key === "ArrowUp"){
        player.y -= player.speed * 5;
    }

    if(e.key === "ArrowDown"){
        player.y += player.speed * 5;
    }

});

function drawPlayer(){

    ctx.fillStyle = player.color;

    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );

}

function drawTrees(){

    ctx.fillStyle = "green";

    trees.forEach((tree,index)=>{

        tree.x -= 3;

        ctx.beginPath();

        ctx.arc(tree.x,tree.y,tree.size,0,Math.PI*2);

        ctx.fill();

        if(
            player.x < tree.x + tree.size &&
            player.x + player.width > tree.x - tree.size &&
            player.y < tree.y + tree.size &&
            player.y + player.height > tree.y - tree.size
        ){

            trees.splice(index,1);

            score++;

        }

    });

}

function drawScore(){

    ctx.fillStyle = "black";

    ctx.font = "25px Poppins";

    ctx.fillText(
        "Pontuação Sustentável: " + score,
        20,
        40
    );

}

function gameLoop(){

    ctx.clearRect(0,0,700,400);

    drawPlayer();

    drawTrees();

    drawScore();

    requestAnimationFrame(gameLoop);

}

gameLoop();

</script>

</body>
</html>
