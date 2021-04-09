//INSTURCTIONS:
//Write a loop that puts 100 square divs (20px x 20px) on the page, each with a different background color. Set their float CSS attribute to left.


//declaring variable
var divsCollection;

//using for loops
for (var i = 1; i <= 100; i++) {
    //generating div
    var div = document.createElement("div");
    //generating random numbers for colors
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    div.style.height = "20px"; //set height
    div.style.width = "20px"; //set width
    div.style.float = "left"; //set postion
    //set background color
    div.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.appendChild(div);
}