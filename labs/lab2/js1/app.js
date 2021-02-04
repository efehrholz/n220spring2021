var radius = 50;
var x = -radius;
var speed = 0.5;

function setup() {
    createCanvas(800, 600);
    fill(136, 227, 203);
    noStroke();
    //ellipse(x, 300, 70, 70);
    ellipseMode(RADIUS);
}

function draw() {
    background(224, 123, 0);
    x += speed; //increase the valuse of x
    if (x > width+radius) { //if the shape is off screen
        x = radius; //move to the left edge
    }
    arc(x, 300, radius, radius, 0.52, 5.76)
}
