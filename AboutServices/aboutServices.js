document.addEventListener('DOMContentLoaded', function () {
    fetch('/AboutServices/aboutServices.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('aboutServices-placeholder').innerHTML = html;
            setupAboutCompanyLogic(); 
        });
});