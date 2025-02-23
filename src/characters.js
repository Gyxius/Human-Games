class Characters {
  constructor(sprite, name = "npc", color = "red") {
    this.id = 0;
    this.color = color;
    this.name = name;
    this.xPosition = 200;
    this.yPosition = 75;
    this.sprite = sprite;
    this.speed = 10;
  }
  draw(ctx) {
    this.sprite.Circle(ctx, this.xPosition, this.yPosition, this.color);
  }
}

class Player extends Characters {
  constructor(sprite, name, color) {
    super(sprite, name, color);
  }
  moveUp() {
    this.yPosition -= this.speed;
  }
  moveDown() {
    this.yPosition += this.speed;
  }
  moveLeft() {
    this.xPosition -= this.speed;
  }
  moveRight() {
    this.xPosition += this.speed;
  }
}
/* 
1️⃣ Data Definition: We want an enemy that has a name, color, a sprite, a xposition, a yposition, an id
2️⃣ Class Signature & Purpose – What is the class’s role?
  Represents an Enemy in the game
3️⃣ Constructor Definition – What properties does it need?
  initializes the a name, a color, a sprite, a position, an id
4️⃣ Method Stubs – What behaviors should it have?
	•	move() → Moves the enemy.
5️⃣ Examples & Tests – How do we use it?
6️⃣ Implementation – Complete the methods.
*/

class Enemies extends Characters {
  constructor(sprite) {
    super(sprite);
  }
  move() {
  }
}

export { Player, Enemies };
