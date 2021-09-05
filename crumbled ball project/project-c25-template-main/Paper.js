class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2}

            this.image = loadImage("paper.png")
            this.x=x
            this.y=y
            this.r=r
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        
    }
    display(){
        var p=this.body.position
        push()
        translate(p.x ,p.y)
        fill("black")
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop()
        }
}