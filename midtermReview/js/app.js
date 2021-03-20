//1. A paddle/rectangle controlled by the player on the right of the screen (moves up/down)
//2. A ball/circle that starts moving to the left of the screen.
//3. This ball bounces off the TOP, BOTTOM, and LEFT of the screen.
//4. This ball bounces off the paddle (use hitTestPoint)
//5. If the ball goes beyond the right of the screen, place the ball back at the center of the screen and set its velocity to the left again.
//7. (optional) Display a "score" number on the screen that ticks up by 1 every time the player catches the ball with the paddle. Resets to zero when the ball resets.

/*var Ball_X = Math.floor(Math.random()*300)+50;
var Ball_Y = 50;
var diameter = 15;
var Ball_XChange = 5;
var Ball_YChange = 5;

var xPaddle;
var yPaddle;
var paddleWidth = 15;
var paddleHeight = 75;

var started = false;
var score = 0;

function setup() {
    createCanvas(900, 600);
    background(0);
}

function draw() {
    noStroke();

    Ball_X += Ball_XChange;
    Ball_Y += Ball_YChange;

    if(Ball_X < diameter/2 || Ball_X > 900 - 0.5*diameter){
        Ball_XChange *= -1;
    }

    //if(Ball_Y < diambeter/2 || Ball_Y > 600 - diameter){
    //    Ball_YChange *= -1;
    //}

    if((Ball_X > xPaddle && Ball_X < xPaddle + paddleWidth) && (Ball_Y + (diameter/2) > yPaddle)) {
        Ball_XChange *= -1;
        Ball_YChange *= -1;
        score++;
    }

    fill(183, 255, 0);
    circle(Ball_X, Ball_Y, diameter);

    if(!started){
        xPaddle = 900/2;
        yPaddle = 600 - 100;
        started = true;
    }
    
    fill(255, 102, 0);
    rect(xPaddle, yPaddle, paddleWidth, paddleHeight);

    fill(0, 255, 255);
    textSize(24);
    text("Score:" + score, 10, 25);
}

function keyPressed() {
    if(keyCode === LEFT_ARROW){
        xPaddle -= 50;
    }
    else if(keyCode === RIGHT_ARROW){
        xPaddle += 50;
    }
}*/

var canvasWidth = 900;
var canvasHeight = 600
var Ball_X = Math.floor(Math.random() * 300) + 50;
var Ball_Y = 25;
var diameter = 15;
var Ball_XChange = 5;
var Ball_YChange = 5;

var xPaddle;
var yPaddle;
var paddleWidth = 15;
var paddleHeight = 75;

var started = false;
var score = 0;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background("#e48257");
    Ball_X += Ball_XChange;
    Ball_Y += Ball_YChange;

    if (Ball_X < diameter/2 ||
        Ball_X > canvasWidth - 0.5*diameter) {
            Ball_XChange *= -1;
    }
    
    if (Ball_Y < diameter/2 || Ball_Y > canvasHeight - diameter) {
        Ball_YChange *= -1;
   }
  
   if ((Ball_X > xPaddle && Ball_X < xPaddle + paddleWidth) && (Ball_Y + (diameter/2) >= yPaddle)) {
       Ball_XChange *= -1;
       Ball_YChange *= -1;
       score++;
    }

   fill("#f2edd7");
   noStroke();
   circle(Ball_X, Ball_Y, diameter);
  
   if (!started) {
       xPaddle = windowWidth / 2;
       yPaddle = windowHeight - 100;
       started = true;
    }

  fill("#3a6351");
  noStroke();
  rect(800, mouseY, paddleWidth, paddleHeight);
  
  fill("#393232");
  textSize(30);
  text("Score: " + score, 25, 45);
}

/*function keyPressed() {
    if (keyCode === UP_ARROW) {
        yPaddle -= 50;
    } else if (keyCode === DOWN_ARROW) {
        yPaddle += 50;
    }
}*/

function name(params) {
    
}