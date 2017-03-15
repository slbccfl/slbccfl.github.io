$(document).ready(function() {
	$(".navbar").load("navbar.html", function() {
		projectsText = localStorage.getItem("web_projects.json");
		console.log(projectsText);
		// projectsObject = JSON.parse(projectsText);
		// $('.web_project_cell:first').load("web_project_cell", "html", function() {
		// 	$('.web_project_cell:nth-child(1) > h2').html(projectsObject.length);
		// });
	});
});
