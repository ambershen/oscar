function plusSlides(a){showSlides(slideIndex+=a)}function currentSlide(a){showSlides(slideIndex=a)}function showSlides(a){var b,c=document.getElementsByClassName("carousel-image");for(a>c.length&&(slideIndex=1),1>a&&(slideIndex=c.length),b=0;b<c.length;b++)c[b].style.display="none";c[slideIndex-1].style.display="block"}var slideIndex=1;showSlides(slideIndex),$(document).ready(function(){$(document).scroll(function(){$(document).scrollTop()>100?$("header").removeClass("large").addClass("small"):$("header").removeClass("small").addClass("large"),$(document).scrollTop()<$("#home").offset().top&&($(".nav-item").removeClass("nav-curr"),$("#navHome").addClass("nav-curr")),$(document).scrollTop()>=$("#home").offset().top&&$(document).scrollTop()<$("#trends").offset().top&&($(".nav-item").removeClass("nav-curr"),$("#navTrends").addClass("nav-curr")),$(document).scrollTop()>=$("#trends").offset().top&&$(document).scrollTop()<$("#snapshot").offset().top&&($(".nav-item").removeClass("nav-curr"),$("#navSnapshot").addClass("nav-curr")),$(document).scrollTop()>=$("#snapshot").offset().top&&($(".nav-item").removeClass("nav-curr"),$("#navContact").addClass("nav-curr"))}),$("a").on("click",function(a){if(""!==this.hash){a.preventDefault();var b=this.hash;console.log(b),$("html, body").animate({scrollTop:$(b).offset().top},800,function(){window.location.hash=b})}}),$("#riverside").on("click",function(){$("#riversideModal").show()}),$("#auroraRed").on("click",function(){$("#auroraRedModal").show()}),$("#lushMeadow").on("click",function(){$("#lushMeadowModal").show()}),$("#airyBlue").on("click",function(){$("#airyBlueModal").show()}),$("#potterClay").on("click",function(){$("#potterClayModal").show()}),$("#sharkskin").on("click",function(){$("#sharkskinModal").show()}),$("#warmTaupe").on("click",function(){$("#warmTaupeModal").show()}),$("#spicyMustard").on("click",function(){$("#spicyMustardModal").show()}),$(".close-btn").on("click",function(){$(this).closest(".modal").hide()})});