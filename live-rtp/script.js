const games = [
  { name:"Sweet Bonanza", img:"https://via.placeholder.com/300x200", rtp:85 },
  { name:"Gates of Olympus", img:"https://via.placeholder.com/300x200", rtp:79 },
  { name:"Starlight Princess", img:"https://via.placeholder.com/300x200", rtp:81 },
  { name:"Bonanza Gold", img:"https://via.placeholder.com/300x200", rtp:26 },
  { name:"Great Rhino", img:"https://via.placeholder.com/300x200", rtp:15 },
  { name:"Aztec Gems", img:"https://via.placeholder.com/300x200", rtp:75 }
];

const grid = document.getElementById("rtpGrid");

games.forEach(game => {
  let color = game.rtp >= 70 ? "green" : game.rtp >= 40 ? "yellow" : "red";

  grid.innerHTML += `
    <div class="game-card">
      <img src="${game.img}" alt="${game.name}">
      <div class="game-info">
        <strong>${game.name}</strong>
        <div class="progress">
          <span class="${color}" style="width:${game.rtp}%"></span>
        </div>
        <div class="percent">${game.rtp}%</div>
      </div>
    </div>
  `;
});
