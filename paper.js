class Paper{
    constructor(){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    
    this.body=Bodies.circle(400,100,40,options);
    this.image=loadImage("paper.png");
    World.add(world,this.body);
    }

    display(){
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        
    }

}