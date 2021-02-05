let xPos = 0;
let yPos = 0;
let radius = 0;

let xDirection = 1;
let yDirection = 2;

let xSpeed = 2;
let ySpeed = 1;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(181, 130, 110);

    xPos = xPos + xSpeed * xDirection;
    yPos = yPos + ySpeed * yDirection;


    if (xPos > width || xPos < radius) {
        xDirection *= -1
    } 
    if (yPos > height || yPos < radius) {
        yDirection *= -1
    }

    fill(84, 192, 255);
    noStroke();
    circle(xPos, yPos, 50);
}

