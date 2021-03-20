//Work on an application that adheres to these specifications:
//Draws 10 circles on the page, at the y location of the mouse
//Each circle's radius is based off how close it is in the x-axis to the mouse x position, with closer circles getting larger
//Each circle's color is based off how close it is in the x-axis to the mouse x position, with closer circles being brighter
//When the mouse button is pressed down, animate all the circles downward
//When the mouse button is released, put the circles at the y location of the mouse
//Do not let the circles go beyond the bottom of the screen

var radius = 10;
//console.log(circleRadius);
var y =[];
//var colors = ["#848991", "#8296b5", "#82aded"]
var yPos = 0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background("##848991")
    y[0] = mouseY //track Y location of mouse

    for(var i=10; i>0; i--) { //initial circle
        stroke(200 - (i*50));
        circle(400, y[0], i*4)
    }
    
    if(mouseIsPressed) {
        circle(400, yPos+2, i*5)
    } else {
        circle(400, y[0], i*5)
    }
}