class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.slingBody = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.slingBody);

    }
    attach(body) {
        this.slingBody.bodyA = body;
    }
    fly() {
        this.slingBody.bodyA = null;

    }
    display() {
        if (this.slingBody.bodyA) {
            var pointA = this.slingBody.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}