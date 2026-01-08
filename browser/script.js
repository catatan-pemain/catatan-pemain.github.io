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

function loadSearch() {
    let query = urlInput.value.trim();
    if (!query) return;

    // Cek keyword
    if (!isAllowedKeyword(query)) {
        alert(
            'Pencarian dibatasi.\n\n' +
            'Hanya untuk:\n' +
            '- win1131\n- betpaus\n- 388sport\n- sbomaxx'
        );
        return;
    }

    // 🔥 DuckDuckGo bisa di-iframe
    const duckDuckGoURL =
        'https://duckduckgo.com/?q=' +
        encodeURIComponent(query) +
        '&kl=id-id&ia=web';

    webView.src = duckDuckGoURL;
}

// Event
goButton.addEventListener('click', loadSearch);
urlInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        loadSearch();
    }
});
