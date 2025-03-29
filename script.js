// Set this variable to true for "BOY", false for "GIRL"
const genderIsBoy = false; // Change this to false for a girl reveal

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
            revealGender();
        }
    }, 1000);
});

function revealGender() {
    const result = document.getElementById("result");
    const button = document.getElementById("revealButton");

    // Flashing effect before reveal
    document.body.classList.add("flash");
    setTimeout(() => document.body.classList.remove("flash"), 2000);

    // Reveal the gender
    setTimeout(() => {
        result.innerText = genderIsBoy ? "IT'S A BOY! 💙" : "IT'S A GIRL! 💖";
        result.style.color = genderIsBoy ? "#3399ff" : "#ff6699";
        result.style.display = "block";

        // Massive confetti explosion
        createConfetti(300);

        // Make button disappear after animation
        setTimeout(() => {
            button.style.display = "none";
        }, 1000);
    }, 2000);
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
