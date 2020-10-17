class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':5.0
      }
      this.body = Bodies.circle(x, y, 20 , options);
      this.width = 20;
      this.height = 20;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;
      push ();
      keyPressed();
      translate(pos.x,pos.y);
      rotate (angle); 
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
  