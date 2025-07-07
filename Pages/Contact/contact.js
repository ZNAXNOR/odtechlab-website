document.addEventListener("DOMContentLoaded", function () {
	fetch("Pages/Contact/contact.html")
		.then((res) => res.text())
		.then((html) => {
			document.getElementById("contact-placeholder").innerHTML = html;
			setupContactLogic();
		});
});

function setupContactLogic() {
	const form = e.target;
	const inputs = form.querySelectorAll("input:required, textarea:required");
	let hasErrors = false;

	inputs.forEach((input) => {
		if (!input.checkValidity()) {
			input.classList.add("invalid-ring");
			hasErrors = true;
		} else {
			input.classList.remove("invalid-ring");
		}
	});

	if (hasErrors) {
		e.preventDefault(); // block submission
	}
}
