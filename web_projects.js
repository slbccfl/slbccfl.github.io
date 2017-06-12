$(document).ready(function() {
	$("#navbar").load("navbar.html", function() {
		console.log("navbar.html loaded to #navbar");
		$.getJSON( "web_projects.json", function( projectsArray ) {
			console.log("web_projects.json loaded to projectsArray");
			console.log(projectsArray);
			$.each(projectsArray.projects, function (i, project) {
				$(".web_project_cell:nth-child(" + i + ")").load("web_project_cell.html", function() {
					console.log("web_project_cell.html loaded to .web_project_cell " + i);
					console.log("project " + i + " assigned to project");
					console.log(project.title);
					console.log(project.longDesc);
					$(".table .web_project_cell:nth-child(" + i + ") h2").html(project.title);
					$(".table .web_project_cell:nth-child(" + i + ") .web_work_about").html(project.longDesc);
					$(".table .web_project_cell:nth-child(" + i + ") img").attr("src", project.image);

				});
			});
		});
	});
});
