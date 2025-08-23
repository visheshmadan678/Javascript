// Get references to elements
const bulbImage = document.getElementById("bulbImage");
const onButton = document.querySelector(".on-btn");
const offButton = document.querySelector(".off-btn");
const resetButton = document.querySelector(".reset-btn"); // reset button

// Track broken state
let isBroken = false;

// Create a message element (hidden by default)
const message = document.createElement("p");
message.style.color = "red";
message.style.fontWeight = "bold";
message.style.display = "none";
message.textContent = "💥 You broke the bulb!";
document.querySelector(".container").appendChild(message);

// Load break sound
const breakSound = new Audio("glass-break.mp3");

// Event listener for ON button
onButton.addEventListener("click", () => {
  if (isBroken) return;
  bulbImage.src = "bulb-on.png";
  message.style.display = "none";
});

// Event listener for OFF button
offButton.addEventListener("click", () => {
  if (isBroken) return;
  bulbImage.src = "bulb-off.png";
  message.style.display = "none";
});

// Event listener for BULB click (break it)
bulbImage.addEventListener("click", () => {
  if (isBroken) return;
  isBroken = true;

  bulbImage.src = "bulb-broken.png";
  bulbImage.classList.add("shake");

  // Play breaking sound
  breakSound.currentTime = 0; // restart if clicked quickly
  breakSound.play();

  // Remove the shake class after animation so it can replay
  setTimeout(() => {
    bulbImage.classList.remove("shake");
  }, 500);

  message.style.display = "block";
});

// Event listener for RESET button
resetButton.addEventListener("click", () => {
  isBroken = false;
  bulbImage.src = "bulb-off.png"; // back to OFF
  message.style.display = "none"; // hide message
});
