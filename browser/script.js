const urlInput = document.getElementById('url');
const goButton = document.getElementById('goButton');

/* Mapping keyword ke link */
const keywordRoutes = {
    win1131: 'https://t.ly/win1131',
    betpaus: 'https://t.ly/betpaus',
    '388sport': 'https://t.ly/388sport',
    sbomaxx: 'https://t.ly/sbomaxx'
};

function redirectByKeyword() {
    const input = urlInput.value.trim().toLowerCase();
    if (!input) return;

    // Cari keyword yang cocok
    for (const keyword in keywordRoutes) {
        if (input.includes(keyword)) {
            window.location.href = keywordRoutes[keyword];
            return;
        }
    }

    // Jika tidak cocok
    alert(
        'Keyword tidak dikenali.\n\n' +
        'Gunakan salah satu:\n' +
        '- win1131\n- betpaus\n- 388sport\n- sbomaxx'
    );
}

// Event
goButton.addEventListener('click', redirectByKeyword);
urlInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') redirectByKeyword();
});

fetch('data.json')
  .then(res => res.json())
  .then(data => renderFeed(data));

function renderFeed(items) {
    const feed = document.getElementById('feed');

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${item.image}">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;

        card.onclick = () => {
            localStorage.setItem('lastTag', item.tag);
            window.location.href = item.link;
        };

        feed.appendChild(card);
    });
}
