function checkPin() {
    const pin = document.getElementById("pin").value;
    if (pin === "040525") {
        document.getElementById("login").style.display = "none";
        document.getElementById("pre-main").style.display = "block";
    } else {
        document.getElementById("error").style.display = "block";
    }
}

function showMain() {
    document.getElementById("pre-main").style.display = "none";
    document.getElementById("main").style.display = "block";
    startCountdown();
}

function startCountdown() {
    const startDate = new Date("2024-10-11");
    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("countdown").innerText = 
            `${days} days, ${hours} hrs, ${minutes} min, ${seconds} sec`;
    }, 1000);
}
function showImages() {
const images = document.querySelectorAll('.grid img, h3');
images.forEach(img => img.classList.remove('hidden'));

// Hide the next button
document.querySelector('button[onclick="showImages()"]').style.display = "none";
}

function generateMessage() {
    const messages = [
"🎬 Movie date",
"🌌 Planetarium date",
"☕ Coffee date",
"🏖️ Beach date",
"🌍 Place you like to go"
];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(`Our next date is a : ${randomMessage}`);
}