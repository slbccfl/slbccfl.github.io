$(document).ready(function() {
	$('.img-headshot').fadeIn(2000).animate({left: '20%'},2000,"swing",function() {
		$('.about-region').fadeIn("slow");
	});
	$('.heaven-button').click(function() {
		$('.img-headshot, .about-region').fadeOut(1000, function() {
			$('.broadwalk-background').fadeOut(1000);
			$('.heaven-background, #heaven').fadeIn(4000, function() {
				$('.heaven-background').fadeOut(2000);
				$('.iowa-background, #heaven, #iowa, #aboutreturn').fadeIn(4000);
			});
		});
	});
	$('.about-button').click(function() {
		$('.iowa-background, .heaven-background, #heaven, #iowa, #aboutreturn').fadeOut(1000);
		$('.broadwalk-background, .img-headshot, .about-region').fadeIn(1000);
	});
});

