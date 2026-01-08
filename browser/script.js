const urlInput = document.getElementById('url');
const goButton = document.getElementById('goButton');
const webView = document.getElementById('webView');

/* Keyword yang diizinkan */
const allowedKeywords = [
    'win1131',
    'betpaus',
    '388sport',
    'sbomaxx'
];

function isAllowedKeyword(query) {
    query = query.toLowerCase();
    return allowedKeywords.some(keyword => query.includes(keyword));
}

function loadURL() {
    let query = urlInput.value.trim();
    if (!query) return;

    // Cek keyword
    if (!isAllowedKeyword(query)) {
        alert(
            'Pencarian dibatasi.\n\n' +
            'Keyword yang diizinkan:\n' +
            '- win1131\n- betpaus\n- 388sport\n- sbomaxx'
        );
        return;
    }

    // Jika lolos, lakukan pencarian Google
    const searchURL =
  'https://duckduckgo.com/?q=' + encodeURIComponent(query) + '&ia=web';

    webView.src = searchURL;
}

// Klik tombol Go
goButton.addEventListener('click', loadURL);

// Tekan Enter
urlInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        loadURL();
    }
});

