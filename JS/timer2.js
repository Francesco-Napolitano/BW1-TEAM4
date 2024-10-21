let timeLeft = 30; // Durata iniziale del timer
const totalDuration = 30;
const timeDisplay = document.getElementById("time-left");
const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function updateTimer() {
  
  timeDisplay.textContent = timeLeft;
  
  const offset = circumference - (timeLeft / totalDuration) * circumference;
  circle.style.strokeDashoffset = offset;
  
  
  if (timeLeft > 0) {
    timeLeft--
    setTimeout(updateTimer, 1000); // Aggiorna il timer ogni secondo
  }
}

updateTimer(); // Avvia il timer
