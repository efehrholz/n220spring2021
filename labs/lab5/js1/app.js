var colors = ["#ff3c00", "##ffae00", "#219e25"];
//console.log(stoplight);

xHeight = 0;
yHeight = 0;

function setup() {
    createCanvas(350, 750);

    background(65);
    noStroke();
}

function draw() {
    background(65);

    drawLights("#ff3c00", xHeight + 40, yHeight +275);
    //drawLights();
    //drawLights();
    
    for(var i = 0; i < colors.length; i++) {
        //fill(colors[i]);
        circle(175,275,120);
    }
}