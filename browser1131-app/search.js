const input = document.getElementById('keyword');
const button = document.getElementById('go');


const routes = {
win1131: 'https://t.ly/win1131',
betpaus: 'https://t.ly/betpaus',
'388sport': 'https://t.ly/388sport',
sbomaxx: 'https://t.ly/sbomaxx'
};


function search() {
const text = input.value.toLowerCase();
for (let key in routes) {
if (text.includes(key)) {
window.location.href = routes[key];
return;
}
}
alert('Keyword tidak tersedia');
}


button.onclick = search;
input.onkeydown = e => e.key === 'Enter' && search();