const logo = document.getElementById("logo-image");
const changeLogoBtn = document.getElementById("changeLogoBtn");
const vinyl = document.getElementById("vinyl");

const audioFiles = [
  "src/audio/Cash_Register.wav",
  "src/audio/cinematic-glitch-fear-183842.mp3",
  "src/audio/DING.wav",
  "src/audio/Pop_Up_Sound_Effect_Green_Screen.mp3",
  // Add more audio file paths as needed
];

let currentAudioIndex = 0;
let audio = new Audio(audioFiles[currentAudioIndex]);

let isPlaying = false;

changeLogoBtn.addEventListener("click", function () {
  if (logo.src.includes("play.svg")) {
    logo.style.transform = "rotate(360deg) scale(1.5)";
    setTimeout(() => {
      logo.src = "./src/img-folder/icons-folder/pause.svg";
      logo.style.transform = "rotate(0deg) scale(1)";
      playMusic();
      showVinyl();
    }, 500);
  } else {
    logo.style.transform = "rotate(360deg) scale(1.5)";
    setTimeout(() => {
      logo.src = "./src/img-folder/icons-folder/play.svg";
      logo.style.transform = "rotate(0deg) scale(1)";
      pauseMusic();
      hideVinyl();
    }, 500);
  }
});

function playMusic() {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  }
}

function pauseMusic() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  }
}

function showVinyl() {
  vinyl.style.display = "block";
}

function hideVinyl() {
  vinyl.style.display = "none";
}

audio.addEventListener("ended", function () {
  // Play the next audio file when the current one ends
  currentAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
  audio.src = audioFiles[currentAudioIndex];
  audio.play();
});
