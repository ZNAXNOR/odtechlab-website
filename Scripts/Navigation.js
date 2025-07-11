window.addEventListener("load", () => {
    const hash = window.location.hash
    if (hash) {
        setTimeout(() => {
            const el = document.querySelector(hash)
            if (el) {
                el.scrollIntoView({ behavior: "smooth" })
            }
        }, 100) // adjust delay if needed
    }
})
