document.addEventListener("DOMContentLoaded", function () {
    fetch("Pages/AboutCompany/AboutCompany.html")
        .then((res) => res.text())
        .then((html) => {
            document.getElementById("aboutCompany-placeholder").innerHTML = html
            setupAboutCompanyLogic()
        })
})
