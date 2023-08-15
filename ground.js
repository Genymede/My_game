export default class Ground {
    constructor(ctx,width,height,speed,scaleRatio){  
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.width = width+5;
        this.height = height;
        this.speed = speed;
        this.scaleRatio = scaleRatio;

        this.x = 0;
        this.y = this.canvas.height - this.height;

        this.GroundImage = new Image();
        this.GroundImage.src = "images/ground.png";


    }

    update(gameSpeed, frameTimeDelta){
        this.x -= 10;
    }

    draw(){
        this.ctx.drawImage(
            this.GroundImage,
            this.x,
            this.y,
            this.width,
            this.height
        );

        this.ctx.drawImage(
            this.GroundImage,
            this.x + this.width,
            this.y,
            this.width,
            this.height
        );

        if(this.x < -(this.width)){
            this.x = 0;
        }
    }
    reset() {
        this.x = 0;
    }
}