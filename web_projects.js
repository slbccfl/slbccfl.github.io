$(document).ready(function() {
	$(".navbar").load("navbar.html", function() {
		$.getJSON( "web_projects.json", function( projectsObject ) {
			$('.web_project_cell:first').load("web_project_cell", "html", function() {
				$('.web_project_cell:nth-child(1) > h2').html(projectsObject.length);
			});
		});
	});
});
