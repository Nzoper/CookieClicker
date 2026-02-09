// Déclaration de mes variables
let play = document.querySelector("#play");
let affichage_score = document.querySelector("#affichage-score");
let cube = document.querySelector("#cube");
let score = 0;
let chrono;
let zone = document.querySelector(".zone-jeu");

// Fonction pour rendre visible le cube 
function demarrerJeu() {
    clearTimeout(chrono);
    cube.style.display = "block";
    score = 0;
    affichage_score.innerHTML = score;
    chrono = setTimeout(finDePartie, 10000);
}

play.addEventListener("click", demarrerJeu);

// Fonction pour le comptage des points au clique
function clickCube() {
    score = score + 1;
    affichage_score.innerHTML = score;
    bougerCube();
    if (score === 10) {
        clearTimeout(chrono);
        alert("Vous avez cliqué 10 fois sur le cube, félicitations");
        cube.style.display = "none";
        score = 0;
        affichage_score.innerHTML = score;
    }
}

cube.addEventListener("click", clickCube);

// Fonction pour bouger le cookie
function bougerCube() {
    let maximumX = zone.clientWidth - cube.clientWidth;
    let maximumY = zone.clientHeight - cube.clientHeight;
    randomX = Math.floor(Math.random()*maximumX);
    randomY = Math.floor(Math.random()*maximumY);
    cube.style.top = randomY + "px";
    cube.style.left = randomX + "px";
}

// Fonction pour gérer la fin de la partie 
function finDePartie() {
    cube.style.display = "none";
    alert("Vous avez perdu, n'hésitez pas à retentez votre chance.")
    score = 0
    affichage_score.innerHTML = score;
}
