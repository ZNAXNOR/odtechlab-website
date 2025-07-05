document.addEventListener("DOMContentLoaded", function () {
	fetch("Pages/OurMission/ourMission.html")
		.then((res) => res.text())
		.then((html) => {
			document.getElementById("ourMission-placeholder").innerHTML = html;
			setupOurMissionLogic();
		});
});
