document.addEventListener('DOMContentLoaded', function () {
    fetch('aboutCompany.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('aboutCompany-placeholder').innerHTML = html;
            setupAboutCompanyLogic(); 
        });
});