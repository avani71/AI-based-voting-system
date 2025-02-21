// script.js
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".vote-btn");
    const message = document.getElementById("vote-message");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const party = this.getAttribute("data-party");
            message.textContent = `You voted for ${party}!`;
            message.style.color = "green";

            // Simulating AI-based processing
            setTimeout(() => {
                message.textContent += " Your vote has been securely recorded.";
            }, 1000);
        });
    });
});
