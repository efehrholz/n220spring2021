let dObj = {x:400, y:0, velocityY:5};
let gravity = .5

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);

    circle(dObj.x, dObj.y, 20);
    dObj.y += dObj.velocityY;
    dObj.velocityY += gravity;

    for(i = 0; i < dObj.y; i++) {
        //console.log(i)
        

    }
}