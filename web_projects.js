$(document).ready(function() {
	$(".navbar").load("navbar.html", "html", function() {
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
			$('.iowa-background, .heaven-background, #heaven, #iowa, #aboutreturn, .resume-object').fadeOut(1000);
			$('.broadwalk-background, .img-headshot, .about-region').fadeIn(1000);
		});
		$('.resume-button').click(function() {
			$('.iowa-background, .heaven-background, #heaven, #iowa, #aboutreturn').fadeOut(1000);
			$('.broadwalk-background, .img-headshot, .about-region').fadeOut(1000);
			$('.resume-object').fadeIn(1000);
		});
		$('.web-projects-button').click(function() {
			$(".navbar").load("navbar.html", "html", function() {
				projectsText = localStorage.getItem("web_projects.json");
				console.log(projectsText);
				// projectsObject = JSON.parse(projectsText);
				// $('.web_project_cell:first').load("web_project_cell", "html", function() {
				// 	$('.web_project_cell:nth-child(1) > h2').html(projectsObject.length);
				// });
			});
		});
	}); 
});


