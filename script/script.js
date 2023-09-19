const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let clickgauche = document.getElementById("#slidegauche");
clickgauche.addEventListener("click", ()=> {
console.log("vous avez cliqué sur la flèche gauche")
});

let clickdroit = document.getElementById("#slidedroit");
clickdroit.addEventListener("click",()=> {
console.log("vous avez cliqué sur la flèche droit")
});