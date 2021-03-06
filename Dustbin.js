class Dustbin{

    constructor(x, y,width,height,angle) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        this.image=loadImage("dustbingreen.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("pink");
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
};