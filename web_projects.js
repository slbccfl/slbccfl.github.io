$(document).ready(function() {
	$("#navbar").load("navbar.html", function() {
		console.log("navbar.html loaded to #navbar");
		$.getJSON( "web_projects.json", function( projectsArray ) {
			console.log("web_projects.json loaded to projectsArray");
			console.log(projectsArray);
			$.each(projectsArray.projects, function (i, project) {
				console.log("project " + i + " assigned to project");
				console.log(project.title);
				console.log(project.longDesc);
				$("table td:eq(" + i + ")").load("web_project_cell.html", function() {
					console.log("web_project_cell.html loaded to .web_project_cell " + i);
					$("table td:eq(" + i + ") h2").html(project.title);
					$("table td:eq(" + i + ") .web_work_about").html(project.longDesc);
					$("table td:eq(" + i + ") img").attr("src", project.image);
				});
			});
		});
	});
});
