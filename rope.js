class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            //stiffness: 0.04,
            //length: 10
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        //this.pointB = pointB
        //this.image1=loadImage("sprites/sling1.png");
        //this.image2=loadImage("sprites/sling2.png");
        //this.image3=loadImage("sprites/sling3.png");

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    attach(body){
   this.rope.bodyA=body;

    }

   // fly(){
     //   this.rope.bodyA = null;
   // }

    display(){
      //  image(this.image1,200,20);
        //image(this.image2,170,20);
       // if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            //if(pointA.x<220){
            strokeWeight(2);
          var anchor1X=pointA.x
          var anchor1Y=pointB.x
    
          var anchor2X=pointA.x+this.offsetX
          var anchor2Y=pointB.x+this.offsetY

          line(anchor1X,anchor1Y,anchor2X,anchor2Y)
          
    }
    
}