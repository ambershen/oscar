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
	/* Add smooth scrolling to nav menu */
	$('a').on("click", function(event){
		if(this.hash !== ""){
			event.preventDefault();
			var hash = this.hash;
			console.log(hash);
			$('html, body').animate({
				scrollTop: $(hash).offset().top}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
	/* Trigger Modals when clicked */
	$('#riverside').on("click", function(){
		$('#riversideModal').show();
	});
	$('#auroraRed').on("click", function(){
		$('#auroraRedModal').show();
	});
	$('#lushMeadow').on("click", function(){
		$('#lushMeadowModal').show();
	});
	$('#airyBlue').on("click", function(){
		$('#airyBlueModal').show();
	});
	$('#potterClay').on("click", function(){
		$('#potterClayModal').show();
	});
	$('#sharkskin').on("click", function(){
		$('#sharkskinModal').show();
	});
	$('#warmTaupe').on("click", function(){
		$('#warmTaupeModal').show();
	});
	$('#spicyMustard').on("click", function(){
		$('#spicyMustardModal').show();
	});
	/* Close the modal when user clicks on CLOSE button */
	$('.close-btn').on("click", function(){
		$(this).closest(".modal").hide();
	});
	/* Close the modal when user clicks anywhere outside the modal box */
	$(window).on("click",function(event){
		if(event.target == $("#riversideModal")){
			$("#riversideModal").hide();
		}
	});
});