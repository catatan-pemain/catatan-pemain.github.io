const urlInput = document.getElementById('url');
const goButton = document.getElementById('goButton');
const webView = document.getElementById('webView');

function loadURL() {
    let url = urlInput.value.trim();

    if (!url) return;

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    webView.src = url;
}

// Klik tombol Go
goButton.addEventListener('click', loadURL);

// Tekan Enter
urlInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        loadURL();
    }
});
