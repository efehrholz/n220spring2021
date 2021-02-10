//let xPos = 0;
//let yPos = 0;



function setup() {
    createCanvas(600, 500);
}

function draw() {
    background(50);
    noStroke();

    if (mouseX, mouseY < 299) {
        fill(84, 192, 255) //blue
    } else (mouseX, mouseY > 300) {
        fill(186, 56, 56) //red
    }

    ellipse(mouseX, mouseY, 25, 25);
}