'use strict'

const players = {
  player1: 0,
  player2: 0,
  player3: 0,
  player4: 0,
  player5: 0,
};

function loadTable() {
  const savedData = JSON.parse(localStorage.getItem('footballTable'));
  if (savedData) {
      Object.assign(players, savedData);
  }
  updateTable();
}

function saveTable() {
  localStorage.setItem('footballTable', JSON.stringify(players));
}

function updateTable() {
  const rows = document.querySelectorAll('tbody tr');
  rows.forEach((row, index) => {
      const goalsCell = row.querySelector('.goals');
      const playerKey = `player${index + 1}`;
      goalsCell.textContent = players[playerKey];
  });
}

function updateGoals(player, amount) {
  if (players[player] !== undefined) {
    players[player] = Math.max(0, players[player] + amount);
      updateTable();
      saveTable();
  }
}

loadTable();
