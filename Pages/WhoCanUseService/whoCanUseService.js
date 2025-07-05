document.addEventListener("DOMContentLoaded", function () {
	fetch("Pages/WhoCanUseService/whoCanUseService.html")
		.then((res) => res.text())
		.then((html) => {
			document.getElementById("whoCanUseService-placeholder").innerHTML =
				html;
			setupWhoCanUseServiceLogic();
		});
});
