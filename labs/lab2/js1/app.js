var radius = 50;
var x = -radius;
var speed = 0.5;

function setup() {
    createCanvas(800, 600);
    fill(136, 227, 203);
    noStroke();
    ellipseMode(RADIUS);
}

function draw() {
    background(224, 123, 0);
    x += speed;
    if (x > width+radius) { 
        x = radius; 
    }
    arc(x, 300, radius, radius, 0.52, 5.76)
}
