class Hanger{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB : pointB,
            stiffness: 0.003,
            length: 35
        }
        this.pointB = pointB;
        this.hanger = Constraint.create(options);
        World.add(world, this.hanger);
    }

    display(){
       if(this.hanger.bodyA){
            var pointA = this.hanger.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
       }
    }
    
}