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
				console.log("project " + i + " assigned to project");
				console.log(project.title);
				console.log(project.longDesc);
				$(".web_project_cell:nth-child(" + i + ") h2").html(project.title);
				$(".web_project_cell:nth-child(" + i + ") .web_work_about").html(project.longDesc);
				$(".web_project_cell:nth-child(" + i + ") img").attr("src", project.image);

			});
		});
	});
});
