let x = 300;


function setup() {
    createCanvas(1225, 600);
}

function draw() {
    background(37, 41, 43);
    //noStroke();
    
    for(let i=0; i<1225; i+=50) {
        fill(0);
        circle(i, x, 0)
        if(i%3 == 0) {
            fill(107, 78, 150);
            circle(i, x, 50);
        }
    
        if(i%5 == 0) {
            fill(47, 130, 80);
            rect(i+25, x-35, 75, 75);
        }

        if(i%3 == 0 && i%5 == 0) {
            fill(44, 107, 156);
            rect(i+25, x-35, 75, 75);
        }
    }
}