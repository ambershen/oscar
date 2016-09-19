/*http://www.w3schools.com/howto/howto_js_slideshow.asp */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("carousel-image");
	if (n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}


$(document).ready(function(){
	$(document).scroll(function(){
	/* for resizing navigation bar*/
	if($(document).scrollTop() > 100){
		$("header").removeClass("large").addClass("small");
	}
	else{
		$("header").removeClass("small").addClass("large");
	}
	/* position indicator */
	if($(document).scrollTop() < $('#home').offset().top){
		$('.nav-item').removeClass("nav-curr");
		$('#navHome').addClass("nav-curr");
	}
	if($(document).scrollTop() >= $('#home').offset().top && $(document).scrollTop() < $('#trends').offset().top){
		$('.nav-item').removeClass("nav-curr");
		$("#navTrends").addClass("nav-curr");
	}
	if($(document).scrollTop() >= $('#trends').offset().top && $(document).scrollTop() < $('#snapshot').offset().top){
		$('.nav-item').removeClass("nav-curr");
		$("#navSnapshot").addClass("nav-curr");
	}
	if($(document).scrollTop() >= $('#snapshot').offset().top){
		$('.nav-item').removeClass("nav-curr");
		$('#navContact').addClass("nav-curr");
	}

});
});