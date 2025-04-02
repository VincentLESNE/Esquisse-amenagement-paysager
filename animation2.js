const texte = "Votre paysagiste en Rhône Isère, basé à l'Isle d'Abeau";
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
