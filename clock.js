var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radiusc = canvas.clientHeight / 2;

// re maps x & y axis to center of canvas
ctx.translate(radius, radius);

//Reduces clock radius
radius = radius * 0.90


//Draws face of the clock
function drawClock(){
    ctx.arc(0,0,radius,0,2*Math.PI);
    ctx.fillstyle = "white";
    ctx.fill();
}