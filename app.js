$(document).ready(function() {
    $(".about-button").click(function() {
    	$('.img-headshot').animate({left: '70%'},"slow","swing");
    	$('.about-region').fadeIn("slow");
    });
});