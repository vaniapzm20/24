document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            loadPage(this.getAttribute("href"));
        });
    });

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.body.innerHTML = data;
            });
    }
});