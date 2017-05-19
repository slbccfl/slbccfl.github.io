$(document).ready(function() {
	$("#navbar").load("navbar.html", function() {
		console.log("navbar.html loaded to #navbar");
		$.getJSON( "web_projects.json", function( projectsArray ) {
			console.log("web_projects.json loaded to projectsObject");
			console.log(projectsArray);
			$('.web_project_cell').load("web_project_cell.html", function() {
				console.log("web_project_cell.html loaded to .web_project_cell");

			});
			$.each(projectsArray.projects, function (i, project) {
				console.log("project " + i + " assigned to var project");
				console.log(project.appTitle);
				console.log(project.appLongDesc);
				// $(".web_projects_cell:nth-child(i) h2").replaceWith(project.appTitle);
				// $(".web_projects_cell:nth-child(i) .web_work_about").replaceWith(project.appLongDesc);

			});
		});
	});
});
