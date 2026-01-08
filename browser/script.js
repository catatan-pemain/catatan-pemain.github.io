const urlInput = document.getElementById('url');
const goButton = document.getElementById('goButton');
const webView = document.getElementById('webView');

function loadURL() {
    let query = urlInput.value.trim();
    if (!query) return;

    // Jika bukan URL, gunakan Google Search
    if (!query.startsWith('http://') && !query.startsWith('https://') && !query.includes('.')) {
        query = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    } else if (!query.startsWith('http://') && !query.startsWith('https://')) {
        query = 'https://' + query;
    }

    webView.src = query;
}

goButton.addEventListener('click', loadURL);

urlInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        loadURL();
    }
});
