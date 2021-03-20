//Work on an application that adheres to these specifications:
//Draws 10 circles on the page, at the y location of the mouse
//Each circle's radius is based off how close it is in the x-axis to the mouse x position, with closer circles getting larger
//Each circle's color is based off how close it is in the x-axis to the mouse x position, with closer circles being brighter
//When the mouse button is pressed down, animate all the circles downward
//When the mouse button is released, put the circles at the y location of the mouse
//Do not let the circles go beyond the bottom of the screen

var radius = 10;
//console.log(radius);
var y =[];
var yPos = 0;
var xPos = 0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background("##848991");
    y[0] = mouseY; //track mouse at Y location

    for(var i=10; i>0; i--) { //initial circle
        circle(400, y[0], i*4);
    }
    
    if(yPos > 10) {
        fill;
    }
}

function mousePressed() {
    var i = 10;
    if(mousePressed) { //animate circle when mouse is pressed
        circle(400, yPos++, i*5);
    } else {
        circle(400, y[0], i*5); //return mouse to yPos
    } 
}