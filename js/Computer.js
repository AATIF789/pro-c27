class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");
    this.life1="green"
    this.life2="green"
    this.life3="green"

  

    World.add(world, this.body);
  }
  life(){
    fill("green")
    textSize(20);
    text("Computer", 1180, 40);

    rect(1140, 50, 70, 30);
    rect(1210, 50, 70, 30);
    rect(1280, 50, 70, 30);
  }
 
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
