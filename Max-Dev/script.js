const roles = ["Role-player", "Developer", "Coder", "Tech Enthusiast"];
const roleText = document.querySelector(".animated-role");
let index = 0;

setInterval(() => {
  index = (index + 1) % roles.length;
  roleText.textContent = roles[index];
}, 3000);

// Music playback
const playBtn = document.getElementById("playMusic");
const music = document.getElementById("bg-music");

playBtn.addEventListener("click", () => {
  music.play();
  playBtn.style.display = "none";
});
