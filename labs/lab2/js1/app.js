let xPos = 0;
let yPos = 300;

let xSpeed = 2;
let ySpeed = 0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(181, 130, 110);

    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    if (xPos > 850) {
        xPos = 0;
    }

    fill(84, 192, 255);
    noStroke();
    circle(xPos, yPos, 50);
}
