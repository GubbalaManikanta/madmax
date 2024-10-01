let timerInterval;

function sendOtp() {
    // Start 30-second countdown
    let timeLeft = 30;
    document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;
    document.getElementById('resend-otp-button').disabled = true;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = '';
            document.getElementById('resend-otp-button').disabled = false;
        }
    }, 1000);
}

function redirectToMain() {
    window.location.href = "main.html"; // Replace this with your main page URL
}
