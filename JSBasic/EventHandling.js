function bulbON() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}
function bulbOFF() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}
function bulbRed() {
  document.getElementById("bulbRed").style.backgroundColor = "red";
}
function bulbGreen() {
  document.getElementById("bulbGreen").style.backgroundColor = "green";
}

document.getElementById("bulbRed").addEventListener("click", bulbRed);
document.getElementById("bulbGreen").addEventListener("click", bulbGreen);

document
  .getElementById("bulbColor")
  .addEventListener("change", changeBulbColor);

function changeBulbColor() {
  const color = document.getElementById("bulbColor").value;
  document.getElementById("bulb1").style.backgroundColor = color;
}
function reset() {
  window.location.reload();
}
