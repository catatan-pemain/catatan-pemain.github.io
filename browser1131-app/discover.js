fetch('data.json')
.then(res => res.json())
.then(data => render(data));


function render(items) {
const feed = document.getElementById('feed');
const last = localStorage.getItem('lastTag');


if (last) items.sort((a,b)=>a.tag===last?-1:1);


items.forEach(i => {
const card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
<img src="${i.image}">
<h3>${i.title}</h3>
<p>${i.desc}</p>
`;
card.onclick = () => {
localStorage.setItem('lastTag', i.tag);
window.location.href = i.link;
};
feed.appendChild(card);
});
}