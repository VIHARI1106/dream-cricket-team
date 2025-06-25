const players = [
  {
    name: "Virat Kohli",
    image: "images/kohli.jpg",
    stats: {
      matches: 300,
      strikeRate: 138.2,
      jersey: 18,
      best: "183 vs PAK"
    }
  },
  {
    name: "MS Dhoni",
    image: "images/dhoni.jpg",
    stats: {
      matches: 350,
      strikeRate: 87.6,
      jersey: 7,
      best: "91* vs SL"
    }
  },
  {
    name: "Rohit Sharma",
    image: "images/rohit.jpg",
    stats: {
      matches: 280,
      strikeRate: 130.1,
      jersey: 45,
      best: "264 vs SL"
    }
  }
];

const playerGrid = document.getElementById("playerGrid");
const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalStats = document.getElementById("modalStats");
const closeModal = document.getElementById("closeModal");

players.forEach((player, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${player.image}" alt="${player.name}" width="100%" />
    <h3>${player.name}</h3>
  `;
  card.onclick = () => {
    modal.classList.remove("hidden");
    modalName.textContent = player.name;
    modalStats.innerHTML = `
      Matches Played: ${player.stats.matches}<br>
      Strike Rate: ${player.stats.strikeRate}<br>
      Jersey Number: ${player.stats.jersey}<br>
      Best Performance: ${player.stats.best}
    `;
  };
  playerGrid.appendChild(card);
});

closeModal.onclick = () => {
  modal.classList.add("hidden");
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.classList.add("hidden");
  }
};
