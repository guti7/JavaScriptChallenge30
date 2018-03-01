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
  const icon = this.paused ? '❚❚' : '►';
  playerToggleButton.textContent = icon;
}

// skipping
function skip() {
  console.log('skipping');
  console.log(this.dataset); // the current button's data attribute set.
  console.log(this.dataset.skip) // the value at the data-skip attribute
  video.currentTime += parseFloat(this.dataset.skip);
}

/* Hook up event listeners */
// Video
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayerToggle);
video.addEventListener('pause', updatePlayerToggle);

// Toggle button UI
playerToggleButton.addEventListener('click', togglePlay);

// Skip buttons
skipButtons.forEach(button => button.addEventListener('click', skip));
