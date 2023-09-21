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

document.body.onload = function () {
	
	const slidegauche = document.getElementById('arrow_left');
	const slidedroit = document.getElementById('arrow_right');
	container = document.getElementById("banner");
	
	slidegauche.addEventListener("click", clickgauche);
	slidedroit.addEventListener("click", clickdroit);

	function clickgauche (){
	position -=1;
	if (position < 0) {
		position = nbrSlides - 1;
	}
	slideshow();
	}
	function clickdroit (){
	position +=1;
	if (position >= nbrSlides) {
		position = 0;
	}
	slideshow ();
	}

	let position=0;

	function slideshow (){
	
		const imageSlide = document.querySelector(".banner-img");
		const tagLine = document.querySelector("#banner p");
		imageSlide.setAttribute ("src","./assets/images/slideshow/" + slides[position].image);
		tagLine.innerHTML=slides[position].tagLine;
		const dotSelected = document.querySelector(".dot_selected");
		dotSelected.classList.remove('dot_selected');
		const updateDotSelected = document.querySelector(".dots :nth-child("+(position+1)+")");
		updateDotSelected.classList.add("dot_selected");
	}

	let elementDots = document.querySelector(".dots"); 
	let nbrSlides = slides.length
		for (let i=0; i<nbrSlides; i++) { 
			let newDot = document.createElement("div");
			elementDots.appendChild(newDot);
			newDot.classList.add('dot');
			if (i===position) {
				newDot.classList.add('dot_selected');
			}	
		}
}