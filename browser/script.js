const urlInput = document.getElementById('url');
const goButton = document.getElementById('goButton');

const allowedKeywords = [
    'win1131',
    'betpaus',
    '388sport',
    'sbomaxx'
];

function isAllowedKeyword(query) {
    query = query.toLowerCase();
    return allowedKeywords.some(k => query.includes(k));
}

function search() {
    const query = urlInput.value.trim();
    if (!query) return;

    if (!isAllowedKeyword(query)) {
        alert(
            'Pencarian dibatasi.\n\n' +
            'Hanya untuk:\n' +
            '- win1131\n- betpaus\n- 388sport\n- sbomaxx'
        );
        return;
    }

    // 🔥 Redirect (SATU-SATUNYA cara legal & stabil)
    const url =
        'https://duckduckgo.com/?q=' +
        encodeURIComponent(query);

    window.location.href = url;
}

goButton.addEventListener('click', search);
urlInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') search();
});
