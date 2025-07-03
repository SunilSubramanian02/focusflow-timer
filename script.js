let timer;
let timeLeft = 5 * 60; // ⏱️ Set to 5 minutes

const timerDisplay = document.getElementById("timer");
const quoteDisplay = document.getElementById("quote");

const quotes = [
  "Dream, dream, dream. Dreams transform into thoughts. – A.P.J. Abdul Kalam",
  "Stay hungry, stay foolish. – Steve Jobs",
  "Push yourself, because no one else is going to do it for you.",
  "Do something today that your future self will thank you for.",
  "Success is the sum of small efforts repeated day in and day out."
];

// 🔁 Update the timer display
function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// ▶️ Start the timer
function startTimer() {
  clearInterval(timer);
  showRandomQuote();
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = "Done!";
    } else {
      timeLeft--;
      updateDisplay();
    }
  }, 1000);
}

// 🔁 Reset the timer
function resetTimer() {
  clearInterval(timer);
  timeLeft = 5 * 60;
  updateDisplay();
  quoteDisplay.textContent = "“Click Start to see your motivational quote!”";
}

// 💬 Show random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = `"${quotes[randomIndex]}"`;
}

// 🟢 Initialize
updateDisplay();
