/* Get all elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playerToggleButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build the functions */
// Play/pause video toggle
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// Update UI for the play pause toggle button
function updatePlayerToggle() {
  const icon = this.paused ? '❚❚' : '►';
  playerToggleButton.textContent = icon;
}

// Skipping video play
function skip() {
  // this.dataset; the current button's data attribute set.
  // this.dataset.skip; the value at the data-skip attribute
  video.currentTime += parseFloat(this.dataset.skip);
}

// Update slider values
function handleRangeUpdate() {
  // update the video volume property with the range's(this) value property
  video[this.name] = this.value;
}

// Update progress bar for video playing time
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Scrubbing video with clicking and dragging
function scrub(e) {
  const timeRatio = (e.offsetX / progress.offsetWidth); // ratio of click location
  const scrubTime = timeRatio * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up event listeners */
// Video
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayerToggle);
video.addEventListener('pause', updatePlayerToggle);

// Toggle button
playerToggleButton.addEventListener('click', togglePlay);

// Skip buttons
skipButtons.forEach(button => button.addEventListener('click', skip));

// Range sliders
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// Progress bar time update
video.addEventListener('timeupdate', handleProgress);

// Scrub the video
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

progress.addEventListener('mousedown', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
