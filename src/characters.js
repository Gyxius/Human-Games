/* Create the classes for Sprites 
Like if the player class is a circle then we return a rectangular skin */

class Characters {
  constructor(sprite, name = "npc", color = "blue") {
    this.id = 0;
    this.color = color;
    this.name = name;
    this.xPosition = 200;
    this.yPosition = 75;
    this.sprite = sprite;
  }
  drawPlayer(ctx) {
    console.log("here");
    this.sprite.Circle(ctx, this.xPosition, this.yPosition, this.color);
  }
}

export { Characters };
