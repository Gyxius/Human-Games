import "./styles.css";
import { Enemies, Player } from "./Characters.js";
import { Sprites } from "./Sprites.js";

const sprite = new Sprites();
const player = new Player(sprite, "Josh", "blue");
const enemy1 = new Enemies(sprite);

function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "#CEE741";
    ctx.rect(0, 0, 600, 600);
    ctx.fill();
    enemy1.draw(ctx);
    player.draw(ctx);
  }
}

window.addEventListener("load", draw);

window.onkeyup = function (e) {
  if (e.key === "ArrowUp") {
    player.moveUp(); // Move up
  } else if (e.key === "ArrowDown") {
    player.moveDown(); // Move Down
  } else if (e.key === "ArrowLeft") {
    player.moveLeft(); // Move Left
  } else if (e.key === "ArrowRight") {
    player.moveRight(); // Move Right
  }
  draw(); // Redraw with new position
};
