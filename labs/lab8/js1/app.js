/* INSTRUCTIONS
Write the markup and CSS to place a square div on the page. 100px by 100px, green background.
Make it so that when the div its clicked, it increases its size by 10% every time.

Hints:

Make a variable to store the height and with of the object
to set the height and width, set to varName + "px"
10% is .1 bigger,or 1.1 * the original size */

document.getElementById('midbox').onclick=function(){increasedSize();};
function increaseSize() {
    var element = document.getElementByld('midbox');
    var positionInfo = element.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;
    var height1 = height*1.1; //increase size by 10%
    var width1 = width*1.1; //increase size by 10%
    document.getElementById("midbox").style.height=height1+"px";
    document.getElementById("midbox").style.width=width1+"px";
}
