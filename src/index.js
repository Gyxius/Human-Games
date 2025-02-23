import "./styles.css";
import { Characters } from "./Characters.js";
import {Sprites} from "./Sprites.js";

let x = 100,
  y = 75,
  speed = 20; // Initial position

// differs from file name only in casing


const sprite = new Sprites();
const josh = new Characters(sprite);

function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "#CEE741";
    ctx.rect(0, 0, 600, 600);
    ctx.fill();
    josh.drawPlayer(ctx);
  }
}

window.addEventListener("load", draw);

window.onkeyup = function (e) {
  if (e.key === "ArrowUp") {
    y -= speed; // Move up
  } else if (e.key === "ArrowDown") {
    y += speed; // Move down
  } else if (e.key === "ArrowLeft") {
    x -= speed; // Move left
  } else if (e.key === "ArrowRight") {
    x += speed; // Move right
  }
  draw(); // Redraw with new position
};
