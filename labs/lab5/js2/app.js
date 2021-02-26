var xPos = 0;
var yPos = 0;

/*var circleX = xPos;
var circleY = yPos;
var rectX = mouseX-45;
var rectY = 425;
var rectH = 85;
var rectW = 15;*/

function setup() {
    createCanvas (700,500);
    noStroke();
}

function draw() {
    collideRect++;
    background("#cae4db");
    fill("#00303f");
    rect(mouseX - 45, 425, 85, 15);

    fill("#cc7351");
    circle(xPos, yPos, 13);

    var xSpeed=3;
    var ySpeed=5;

    xPos += xSpeed;
    yPos += ySpeed;
}

function collideRect(circleX, circleY, rectX, rectY, rectH, rectW) {
    var colliding = false;
    if(circleX > rectX && circleX  < rectX + rectW) {
        if(circleY > rectY && circleY < rectY + rectH) {
            return true;
        }
    }
    return false
}