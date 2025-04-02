const texte = "Sublimez votre extérieur avec Esquisse !";
let index = 0;
const vitesse = 20;

function ecrireTexte() {
  if (index < texte.length) {
    document.querySelector(".typing").textContent += texte[index];
    index++;
    setTimeout(ecrireTexte, vitesse);
  } else {
    document.querySelector(".typing").style.borderRight = "none";
  }
}

window.onload = ecrireTexte;
