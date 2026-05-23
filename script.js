const bottleField = document.querySelector(".bottle-field");
const confettiField = document.querySelector(".confetti-field");
const burstButton = document.querySelector(".burst-button");

const colors = ["#ffd166", "#ff6b6b", "#3dd6c6", "#3a86ff", "#ffffff"];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function setVar(element, name, value) {
  element.style.setProperty(name, value);
}

function createBottle(index) {
  const bottle = document.createElement("span");
  const label = document.createElement("span");
  bottle.className = "bottle";
  label.className = "bottle-label";
  bottle.append(label);

  setVar(bottle, "--x", `${randomBetween(0, 98).toFixed(2)}vw`);
  setVar(bottle, "--tilt", `${randomBetween(-24, 26).toFixed(2)}deg`);
  setVar(bottle, "--sway", `${randomBetween(-10, 10).toFixed(2)}rem`);
  setVar(bottle, "--duration", `${randomBetween(7.5, 13.5).toFixed(2)}s`);
  setVar(bottle, "--delay", `${(index * -0.42).toFixed(2)}s`);

  bottleField.append(bottle);
}

function createBubble(index) {
  const bubble = document.createElement("span");
  bubble.className = "bubble";

  setVar(bubble, "--x", `${randomBetween(2, 98).toFixed(2)}vw`);
  setVar(bubble, "--y", `${randomBetween(56, 96).toFixed(2)}vh`);
  setVar(bubble, "--size", `${randomBetween(0.28, 0.84).toFixed(2)}rem`);
  setVar(bubble, "--sway", `${randomBetween(-3, 3).toFixed(2)}rem`);
  setVar(bubble, "--duration", `${randomBetween(3, 6).toFixed(2)}s`);
  setVar(bubble, "--delay", `${(index * -0.18).toFixed(2)}s`);

  bubble.style.left = "var(--x)";
  bubble.style.top = "var(--y)";
  bottleField.append(bubble);
}

function createConfetti(index) {
  const piece = document.createElement("span");
  piece.className = "confetti";

  setVar(piece, "--x", `${randomBetween(0, 100).toFixed(2)}vw`);
  setVar(piece, "--w", `${randomBetween(0.28, 0.7).toFixed(2)}rem`);
  setVar(piece, "--h", `${randomBetween(0.52, 1.2).toFixed(2)}rem`);
  setVar(piece, "--rotate", `${randomBetween(0, 180).toFixed(2)}deg`);
  setVar(piece, "--sway", `${randomBetween(-15, 15).toFixed(2)}rem`);
  setVar(piece, "--duration", `${randomBetween(5, 11).toFixed(2)}s`);
  setVar(piece, "--delay", `${(index * -0.23).toFixed(2)}s`);
  setVar(piece, "--color", colors[index % colors.length]);

  confettiField.append(piece);
}

function sparkleBurst() {
  for (let index = 0; index < 34; index += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";

    setVar(spark, "--x", `${randomBetween(12, 88).toFixed(2)}vw`);
    setVar(spark, "--y", `${randomBetween(12, 58).toFixed(2)}vh`);
    setVar(spark, "--color", colors[index % colors.length]);

    confettiField.append(spark);
    spark.addEventListener("animationend", () => spark.remove(), { once: true });
  }
}

for (let index = 0; index < 18; index += 1) {
  createBottle(index);
}

for (let index = 0; index < 38; index += 1) {
  createBubble(index);
}

for (let index = 0; index < 90; index += 1) {
  createConfetti(index);
}

burstButton.addEventListener("click", sparkleBurst);
window.addEventListener("load", () => window.setTimeout(sparkleBurst, 650));
