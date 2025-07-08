document.addEventListener("DOMContentLoaded", function () {
    fetch("Pages/Goals/Goals.html")
        .then((res) => res.text())
        .then((html) => {
            document.getElementById("goals-placeholder").innerHTML = html
            setupGoalsLogic()
        })
})
