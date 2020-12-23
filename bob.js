class Bob {
    constructor(x,y) {
        var options = { 
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic:false
        }
        this.radius=7;
        this.body = Bodies.circle(this.x, this.y,this.radius,options);
       
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(100,100,this.radius,this.radius);
        pop();
      }
}