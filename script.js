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

function updateCountUp() {
    const startDate = new Date("March 24, 2023 00:00:00");
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    document.getElementById("years").textContent = `${years} Years`;
    document.getElementById("months").textContent = `${months} Months`;
    document.getElementById("days").textContent = `${days} Days`;
    document.getElementById("hours").textContent = `${hours} Hours`;
    document.getElementById("minutes").textContent = `${minutes} Minutes`;
    document.getElementById("seconds").textContent = `${seconds} Seconds`;
}

// Update every second
setInterval(updateCountUp, 1000);
updateCountUp(); // Initial call