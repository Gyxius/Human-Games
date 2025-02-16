import "./styles.css";

let x = 100,
  y = 75,
  speed = 20; // Initial position

function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
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

  draw(); // Redraw with new position
};
