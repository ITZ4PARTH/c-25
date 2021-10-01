class CannonBall {
  constructor(x, y) {
    var options = {
     //add resistution
     resistution:0.5,   
      isStatic: true
    };
//add circle to the body
this.r= 30
this.body=Bodies.circle(x,y,this.r,options)
this.balImage = loadImage("assets/cannonball.png");
//loadImage
    World.add(world, this.body);

  }
      
  //add shoot function 

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//call the image function
image(this.balImage, 0, 0,this.r, this.r);
    pop();

    }
  }
