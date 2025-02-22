import "./styles.css";

let x = 100,
  y = 75,
  speed = 20; // Initial position


function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "#CEE741";
    ctx.rect(0, 0, 600, 600);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(500, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
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
  c;
  draw(); // Redraw with new position
};
