/* Get all elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playerToggleButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build the functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updatePlayerToggle() {
  console.log(playerToggleButton);
  const icon = this.paused ? '❚❚' : '►';
  console.log(`icon: ${icon}`);
  playerToggleButton.textContent = icon;
}

/* Hook up event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayerToggle);
video.addEventListener('pause', updatePlayerToggle);

playerToggleButton.addEventListener('click', togglePlay);
