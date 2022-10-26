import './style.css';

const playerName = document.getElementById('player-name');
const playerScore = document.getElementById('player-score');
const submitBtn = document.getElementById('score-submit-btn');
const refershBtn = document.querySelector('.refersh-btn');
const showScores = document.querySelector('.show-scores');

const apiId = '';
const url = '';

refershBtn.addEventListener('click', async () => {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data = data.result;
      showScores.innerHTML = '';
      data.foEach((element) => {
        const listItem = document.createElement('ul');
        listItem.classList = 'user-score-table';

        const userName = document.createElement('li');
        userName.innerText = element.user;

        const userScore = document.createElement('li');
        userScore.innerText = element.score;

        listItem.append(userName, userScore);
        showScores.append(listItem);
      });
    });
});

submitBtn.addEventListener('click', async () => {
  const userData = {
    user: playerName.value,
    score: playerScore.value,
  };
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json());
  playerName.value = '';
  playerScore.value = '';
});