class Waste{

    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0.5,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.width=50;
        this.image=loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(RADIUS);
        image(this.image,0, 0, this.width,this.width);
        pop();
      }
    };  
