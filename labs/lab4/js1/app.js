var colors = ["#ffa62b", "#db6400", "#16697a"];

function setup() {
    createCanvas(800, 600);
    noStroke();
}

function draw() {
    for(var i = 0; i < colors.length; i ++) {
        fill(colors[i]);
        //draw shape
        rect(0, 200*i, 800, 800);
    }
    
}