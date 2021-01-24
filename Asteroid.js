class Asteroid {
    constructor(x, y,radius) {
      var options = {
        'isStatic': false,
        'restitution':0.3,
        'friction':1.5,
        'density':1.2
      }
      this.x = x
      this.y = y
      this.radius = radius
      this.image = loadImage("/asteroid.png")
      this.body = Bodies.circle(this.x, this.y,radius,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("brown")
      ellipse(this.x, this.y,this.r/2);
      image(this.image,0,0)
      pop();
    }
  };
  