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

    if (!isAllowedKeyword(query)) {
        alert(
            'Pencarian dibatasi.\n\n' +
            'Hanya untuk:\n' +
            '- win1131\n- betpaus\n- 388sport\n- sbomaxx'
        );
        return;
    }

    // 🔥 DuckDuckGo HTML (iframe-safe)
    const duckDuckGoURL =
        'https://html.duckduckgo.com/html/?q=' +
        encodeURIComponent(query);

    webView.src = duckDuckGoURL;
}

// Event listener
goButton.addEventListener('click', loadSearch);
urlInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') loadSearch();
});
