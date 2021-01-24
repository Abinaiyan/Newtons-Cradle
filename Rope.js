class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 400
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){

    this.sling.bodyA = null;

    }

    display(){
        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            //var pointB = this.sling.pointB;
           strokeWeight(1.25)
           stroke(255)
            line(pointA.x, pointA.y,this.sling.pointB.x, this.sling.pointB.y);
        }
       
    }
    
}