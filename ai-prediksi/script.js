function generate() {

    document.getElementById("result").classList.add("hidden");
    document.getElementById("scan").classList.remove("hidden");

    let progress = 0;
    const texts = [
        "Initializing AI core...",
        "Generating username pattern...",
        "Encrypting identity hash...",
        "Analyzing jackpot probability...",
        "Finalizing prediction..."
    ];

    const progressBar = document.getElementById("progress");
    const scanText = document.getElementById("scanText");

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress > 100) progress = 100;

        progressBar.style.width = progress + "%";
        scanText.innerText = texts[Math.floor(Math.random() * texts.length)];

        if (progress >= 100) {
            clearInterval(interval);
            showResult();
        }
    }, 350);
}

function showResult() {
    document.getElementById("scan").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    // AUTO GENERATE USERNAME AI
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let username = "";
    for (let i = 0; i < 12; i++) {
        username += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("resultUser").innerText = username;

    // Hadiah random (fake AI prediction)
    const reward = Math.floor(Math.random() * 45000000) + 5000000;
    document.getElementById("rewardValue").innerText =
        "Rp " + reward.toLocaleString("id-ID");
}
