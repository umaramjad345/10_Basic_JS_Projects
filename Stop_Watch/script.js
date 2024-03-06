const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);
  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
  resetButtonEl.disabled = false;
}
function formatTime(elapsedTime) {
  const milliSeconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
  );
}
function stopTimer() {
  clearInterval(timeInterval);
  stopButtonEl.disabled = true;
  startButtonEl.disabled = false;
  resetButtonEl.disabled = false;
}
function resetTimer() {
  clearInterval(timeInterval);
  timerEl.textContent = "00:00:00";
  elapsedTime = 0;
  stopButtonEl.disabled = true;
  startButtonEl.disabled = false;
  resetButtonEl.disabled = true;
}
startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
