function generate() {
    const username = document.getElementById("username").value.trim();

    if (username === "") {
        alert("Masukkan username / ID terlebih dahulu!");
        return;
    }

    document.getElementById("result").classList.remove("hidden");
    document.getElementById("resultUser").innerText = username.toUpperCase();

    // Hadiah random (fake AI prediction)
    const min = 5000000;
    const max = 50000000;
    const reward = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("rewardValue").innerText =
        "Rp " + reward.toLocaleString("id-ID");
}
