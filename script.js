// Set this variable to true for "BOY", false for "GIRL"
const genderIsBoy = false; // Change this to true for a boy reveal

document.getElementById("revealButton").addEventListener("click", function () {
    const result = document.getElementById("result");
    const button = document.getElementById("revealButton");

    button.disabled = true; // Disable button after first click
    button.innerText = "Get Ready...";

    // Countdown effect
    let countdown = 3;
    const countdownInterval = setInterval(() => {
        button.innerText = countdown > 0 ? `Revealing in... ${countdown}` : "IT'S A!!!!!!!!!";
        countdown--;
        if (countdown < 0) {
            clearInterval(countdownInterval);
            startFlashingSequence();
        }
    }, 1000);
});

function startFlashingSequence() {
    const overlay = document.getElementById("colorOverlay");
    const colors = ["rgba(51, 153, 255, 0.6)", "rgba(255, 102, 153, 0.6)"]; // Blue & Pink with transparency
    let flashCount = 0;
    const maxFlashes = 6;

    const flashInterval = setInterval(() => {
        overlay.style.backgroundColor = colors[flashCount % 2]; // Alternate colors
        flashCount++;

        if (flashCount >= maxFlashes) {
            clearInterval(flashInterval);
            revealGender();
        }
    }, 500);
}

function revealGender() {
    const result = document.getElementById("result");
    const button = document.getElementById("revealButton");
    const overlay = document.getElementById("colorOverlay");

    // Set final overlay color based on gender
    overlay.style.backgroundColor = genderIsBoy ? "rgba(51, 153, 255, 0.8)" : "rgba(255, 102, 153, 0.8)";

    setTimeout(() => {
        result.innerText = genderIsBoy ? "IT'S A BOY! 💙" : "IT'S A GIRL! 💖";
        result.style.color = "black";
        result.style.display = "block";

        // Massive confetti explosion
        createConfetti(300);

        // Make button disappear after animation
        setTimeout(() => {
            button.style.display = "none";
        }, 1000);
    }, 1000);
}

function createConfetti(amount) {
    for (let i = 0; i < amount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = genderIsBoy ? "#3399ff" : "#ff6699";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}
