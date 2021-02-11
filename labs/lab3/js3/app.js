


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(230);
    fill(255);
    //noFill();

    //for loop syntax
    for(var i=40; i>0; i--) {
        //stroke(200 - (i*10));

        circle(200, 200, i*5.1)
    }
}