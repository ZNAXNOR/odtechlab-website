document.addEventListener("DOMContentLoaded", function () {
    fetch("Pages/Footer/footer.html")
        .then((res) => res.text())
        .then((html) => {
            document.getElementById("footer-placeholder").innerHTML = html
            setupHeaderLogic()
        })
})
