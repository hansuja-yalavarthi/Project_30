class Block {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.4,
      friction: 0.0,
    }
    this.visiblity = 225;
    this.blockBody = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("block.png")
    World.add(world, this.blockBody);

  }

  display() {
    console.log(this.blockBody.speed);
    var pos = this.blockBody.position;
    if (this.blockBody.speed < 3) {
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    } else {
      World.remove(world, this.blockBody);
      push();
      this.visiblity = this.visiblity - 5;
      tint(255, this.visiblity);
      image(this.image, this.blockBody.position.x, this.blockBody.position.y, this.width, this.height);
      pop();
    }
  }
}