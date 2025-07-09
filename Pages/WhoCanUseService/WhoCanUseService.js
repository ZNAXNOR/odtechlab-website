document.addEventListener("DOMContentLoaded", function () {
    fetch("Pages/WhoCanUseService/WhoCanUseService.html")
        .then((res) => res.text())
        .then((html) => {
            document.getElementById("whoCanUseService-placeholder").innerHTML = html
            setupWhoCanUseServiceLogic()
        })
})
