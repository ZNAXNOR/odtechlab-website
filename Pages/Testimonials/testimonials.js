document.addEventListener("DOMContentLoaded", function () {
    fetch("Pages/Testimonials/Testimonials.html")
        .then((res) => res.text())
        .then((html) => {
            document.getElementById("testimonials-placeholder").innerHTML = html
            setupTestimonialsLogic()
        })
})
