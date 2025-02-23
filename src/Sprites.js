class Sprites {
  // Define a method that draws a circle on the canvas.
  Circle(ctx, xpos = 0, ypos = 0, color = "red", radius = 20) {
    ctx.beginPath();
    ctx.arc(xpos, ypos, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

export { Sprites };
