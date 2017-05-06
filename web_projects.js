$(document).ready(function() {
	$("#navbar").load("navbar.html", function() {
		$.getJSON( "web_projects.json", function( projectsObject ) {
			$('.web_project_cell').load("web_project_cell.html", function() {
				for (i in projectsObject) {
					var project = projectsObject[i];
					$(".web_projects_cell:nth-child(i) h2").replaceWith(project.appTitle);
					$(".web_projects_cell:nth-child(i) .web_work_about").replaceWith(project.appLongDesc);

				};
			});
		});
	});
});
