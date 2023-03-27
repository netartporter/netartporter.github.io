// Tableau contenant les différentes images à rattraper
var images = [
	"image1.png",
	"image2.png",
	"image3.png"
];

// Temps en millisecondes entre chaque apparition d'image
var delai = 1000;

// Compteur de points
var compteur = 0;

// Fonction pour générer une image aléatoire
function imageAleatoire() {
	var index = Math.floor(Math.random() * images.length);
	return images[index];
}

// Fonction pour faire apparaître une image
function apparaitreImage() {
	var image = document.createElement("div");
	image.classList.add("image");
	image.style.backgroundImage = "url('" + imageAleatoire() + "')";
	image.addEventListener("click", function() {
		this.parentNode.removeChild(this);
		compteur++;
		document.getElementById("compteur").textContent = compteur;
	});
	document.body.appendChild(image);
	setTimeout(apparaitreImage, delai);
}

// Lancement du jeu
apparaitreImage();
