let x=0
let y=0


function setup() {
    createCanvas(400, 208);
}

function draw() {
    fill(255, 0 ,0);
    noStroke();

    for(i=0; i<4; i++) {
        for(k=0; k<=i; k++) {
            rect(x, y, 50, 50);
            x+=52;
        }
        x=0;
        y+=52;
    }
}