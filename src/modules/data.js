const userData = [
  { Name: 'Sohaib', score: 100 },
  { Name: 'Ali', score: 120 },
  { Name: 'Abid', score: 80 },
  { Name: 'Ahmad', score: 70 },
  { Name: 'Yasir', score: 60 },
  { Name: 'Muhammad', score: 40 },
  { Name: 'Hemat', score: 90 },
];

const showScore = document.querySelector('.show-scores');
let playerData = '';

userData.forEach((player) => {
  playerData += `
    <li>${player.Name} : ${player.score}</li>
    `;
});

showScore.innerHTML = playerData;