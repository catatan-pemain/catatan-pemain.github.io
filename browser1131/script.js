fetch('data.json')
.then(res => res.json())
.then(items => renderFeed(items));


function renderFeed(items) {
const feed = document.getElementById('feed');
const lastTag = localStorage.getItem('lastTag');


if (lastTag) {
items.sort((a, b) => a.tag === lastTag ? -1 : 1);
}


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