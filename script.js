function updateCountdown() {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(19, 0, 0, 0);

    if (now > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
    }

    const diff = targetTime - now;
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${hours} timer ${minutes} minutter ${seconds} sekunder`;

    setTimeout(updateCountdown, 1000);
}

updateCountdown();