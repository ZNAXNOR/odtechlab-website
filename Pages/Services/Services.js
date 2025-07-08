document.addEventListener("DOMContentLoaded", function () {
    fetch("Pages/Services/Services.html")
        .then((res) => res.text())
        .then((html) => {
            document.getElementById("services-placeholder").innerHTML = html
            setupServicesLogic()
        })
})
