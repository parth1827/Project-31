class Box {
    constructor(x,y,r){
        var options  = {
           
            frictionAir : 0.005,
            density : 0.05,
            isStatic : true
        }

        this.body = Bodies.circle(x,y,r,options);

        this.r = r;

        World.add(world,this.body);

    }

    display (){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop();
       
    }

}