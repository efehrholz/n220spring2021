var number = 10; //number of places tracked
var x = [];
var y =[];

function setup() {
    createCanvas(800, 600);
    //noStroke();
    
    for(i = 0; i < number; i ++) {
        x[i] = 0;
        y[i] = 0;
    }
}

function draw() {
    background(0);

    for(i = number - 1; i > 0; i --) { //array values reversed
        x[i] = x[i - 1];
        y[i] = y[i - 1];
    }

    x[0] = mouseX //set element
    y[0] = mouseY //set element

    for(i = 0; i < number; i ++) {
        fill(i * 100); 
        circle(x[i], y[i], 30)
    }
}