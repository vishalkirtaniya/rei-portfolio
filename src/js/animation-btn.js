const logo = document.getElementById("logo-image");
const changeLogoBtn = document.getElementById("changeLogoBtn");
const audio = document.getElementById("my-audio");
const vinyl = document.getElementById("vinyl");

let isPlaying = false;

changeLogoBtn.addEventListener("click", function () {
  if (logo.src.includes("play.svg")) {
    logo.style.transform = "rotate(360deg) scale(1.5)"; // Example transition effect
    setTimeout(() => {
      logo.src = "./src/img-folder/icons-folder/pause.svg"; // Change to the new logo path
      logo.style.transform = "rotate(0deg) scale(1)"; // Reset transform
      playMusic();
      showVinyl(); // Show vinyl when music plays
    }, 500); // Adjust timing to match transition duration
  } else {
    logo.style.transform = "rotate(360deg) scale(1.5)"; // Example transition effect
    setTimeout(() => {
      logo.src = "./src/img-folder/icons-folder/play.svg"; // Restore original logo
      logo.style.transform = "rotate(0deg) scale(1)"; // Reset transform
      pauseMusic();
      hideVinyl(); // Hide vinyl when music stops
    }, 500); // Adjust timing to match transition duration
  }
});

function playMusic() {
  audio.play();
  isPlaying = true;
}

function pauseMusic() {
  audio.pause();
  isPlaying = false;
}

function showVinyl() {
  vinyl.style.display = "block";
}

function hideVinyl() {
  vinyl.style.display = "none";
}
