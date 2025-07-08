document.addEventListener("DOMContentLoaded", function () {
    fetch("Pages/Footer/Footer.html")
        .then((res) => res.text())
        .then((html) => {
            document.getElementById("footer-placeholder").innerHTML = html
            setupFooterLogic()
        })
})
