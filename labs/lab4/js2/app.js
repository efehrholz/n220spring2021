//let dObj = {x:400, y:0, velocityY:5};
//let gravity = .5
let myYs = [0, 1, 2, 3, 4, 5];
//myYs = [0]

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);

    circle(dObj.x, dObj.y, 20);
    dObj.y += dObj.velocityY;
    dObj.velocityY += gravity;

    let sum = 20
    for(i = 0; i < myYs.lengths; i++) {
        //console.log(i)
        //let itemAtIndex = myYs[i];
        //sum += itemAtIndex
    }
}