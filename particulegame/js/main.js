// DOM READY

//document.addEventListener("DOMContentLoaded", function() {
    console.log('ready');
	// définir les variables
	// définir les variables
	let vies = 6;
	let vitesseCarrés = 5;
	let vitesseEau = 2;
	
	// créer un carré aléatoire
	function creerCarré() {
		let carré = document.createElement("div");
		carré.className = "carré";
		carré.style.left = Math.floor(Math.random() * 751) + "px";
		document.getElementById("carrés").appendChild(carré);
		let couleur = Math.floor(Math.random() * 3);
		if (couleur === 0) {
			carré.classList.add("bleu");
		} else if (couleur === 1) {
			carré.classList.add("jaune");
		}
		return carré;
	}

// FUNCTIONS EXTERNES
const FPS = 60;
function createSquare() {
    // Définissez la position et la couleur aléatoire du carré
    const x = Math.floor(Math.random() * canvas.width);
    const y = 0;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const speed = Math.floor(Math.random() * 3) + 1;
  
    // Retournez un objet carré avec les propriétés définies ci-dessus
    return { x, y, color, speed };
  }
function lancerJeu() {
    var score = 0;
    var vies = 6;
    var panier = document.getElementById('panier');
    var carrés = document.getElementById('carrés');
    var scoreValeur = document.getElementById('score-valeur');
    var viesValeur = document.getElementById('vies-valeur');
    var play = document.getElementById('play');
    play.style.display = 'none';

    function ajouterCarré() {
        var carré = document.createElement('div');
        carré.classList.add('carré');
        carré.classList.add(Math.random() < 0.5 ? 'bleu' : 'jaune');
        carré.style.left = Math.floor(Math.random() * (window.innerWidth - 50)) + 'px';
        carré.addEventListener('transitionend', function() {
            carré.remove();
            vies--;
            viesValeur.innerHTML = vies;
            if (vies === 0) {
                alert('Game Over!\nVotre score est de ' + score);
                document.location.reload();
            }
        });
        carrés.appendChild(carré);
        setTimeout(function() {
            carré.style.top = 'calc(100% - 50px)';
            carré.addEventListener('mousedown', function() {
                carré.remove();
                score++;
                scoreValeur.innerHTML = score;
            });
        });
        setTimeout(function() {
            if (carré.parentElement !== null) {
                carré.remove();
                vies--;
                viesValeur.innerHTML = vies;
                if (vies === 0) {
                    alert(`Tas perdu, Tkt cétait le but. \nLe lavage de vêtements libère des microfibres synthétiques, qui non fitrées se retrouvent dans les océans et donc partout.\nOn parle de 30 000 tonnes de microplastique par an relaché par l Europe selon une étude de 2017 de la branche allemande de WWF\n\nTon score si tu veux quand même savoir était de ${score}`)
                    document.location.reload();
                }
            }
        }, 3000,1000);
    setTimeout(ajouterCarré, 1000);
}


ajouterCarré()

document.addEventListener('mousemove', function(e) {
    panier.style.left = e.clientX + 'px';
});
}
// Fonction pour détecter la collision entre le panier et les carrés
function detectCollision(basket, square) {
    // Coordonnées du panier
    const basketTop = basket.offsetTop;
    const basketLeft = basket.offsetLeft;
    const basketBottom = basketTop + basket.offsetHeight;
    const basketRight = basketLeft + basket.offsetWidth;
    
    // Coordonnées du carré
    const squareTop = square.offsetTop;
    const squareLeft = square.offsetLeft;
    const squareBottom = squareTop + square.offsetHeight;
    const squareRight = squareLeft + square.offsetWidth;
  
    // Vérification de la collision entre le panier et le carré
    if (basketTop < squareBottom && basketBottom > squareTop && basketLeft < squareRight && basketRight > squareLeft) {
      return true;
    } else {
      return false;
    }
  }
  
  // Fonction pour gérer la récupération des carrés par le panier
  function handleSquareCapture(square) {
    // Si le carré a été capturé par le panier
    if (detectCollision(basket, square)) {
      // Augmentation du score de 1
      score++;
      scoreElement.textContent = `Score: ${score}`;
      // Suppression du carré
      square.remove();
    }
  }
// Récupérer les éléments HTML
const panier = document.getElementById('panier');
const carre = document.getElementById('carre');

// Ajouter un événement de collision entre le panier et le carré
panier.addEventListener('collision', function() {
  // Déplacer le carré dans le panier
  panier.appendChild(carre);
});

// Déclencher l'événement de collision lorsqu'ils entrent en collision
function detectCollision() {
  const panierRect = panier.getBoundingClientRect();
  const carreRect = carre.getBoundingClientRect();

  if (
    carreRect.left < panierRect.right &&
    carreRect.right > panierRect.left &&
    carreRect.top < panierRect.bottom &&
    carreRect.bottom > panierRect.top
  ) {
    // Déclencher l'événement de collision
    const event = new Event('collision');
    panier.dispatchEvent(event);
  }
}

// Vérifier la collision toutes les 10 millisecondes
setInterval(detectCollision, 10);
