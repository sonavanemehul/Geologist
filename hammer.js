class Hammer {
    constructor(x, y, width, height)  {
      var options = {
        'density':2,
        'friction':1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
      display(){
      
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
  
        push();
          translate(this.body.position.x, this.body.position.y);
         // rotate(angle);
          rect(CENTER);
          rect( -100, 0, this.width, this.height);
          fill("yellow");
          
          pop();
        }
  }
  