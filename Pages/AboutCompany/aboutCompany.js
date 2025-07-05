document.addEventListener('DOMContentLoaded', function () {
    fetch('/Pages/AboutCompany/aboutCompany.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('aboutCompany-placeholder').innerHTML = html;
            setupAboutCompanyLogic(); 
        });
});