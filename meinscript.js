//Im Dokument wird durch document.querySelector der erste Button angesprochen.
let button = document.querySelector("button");
//Angeben welche Variable welche Aktion ausführen soll.
button.addEventListener("click", changeRandomColor);
//console.log(button);

function changeRandomColor() {
  const header = document.querySelector("header");
  let randomColor = randomHexColor();
  header.style.backgroundColor = randomColor;
  const colorName = document.querySelector("#colorName");
  // Umformung der Farbe in Textform "textContent"
  colorName.textContent = randomColor;
}

/**
 * Toggle color of header
 * Generate random number between min and max
 */
function randomNumber(min, max) {
  const num = Math.random() * (max - min + 1) + min;
  return Math.floor(num);
}

/**
 * Generate random hex number for color
 */
function randomHexNumber() {
  let hex = randomNumber(0, 255).toString(16);
  if (hex.length === 1) {
    hex = "0" + hex;
  }
  return hex;
}

/**
 * Generate random hex color
 */
function randomHexColor() {
  const red = randomHexNumber();
  const green = randomHexNumber();
  const blue = randomHexNumber();

  return ("#" + red + green + blue).toUpperCase();
}
