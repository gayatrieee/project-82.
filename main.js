var mouseEvent= "empty";
var last_position_of_x,last_position_of_y;


canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color= "black";
width_of_line= 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{

    color = document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove",my_mousedown);
    function my_mousedown(e)
    {
        current_position_of_mouse_x = e.clinetX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clinetY - canvas.offsetTop;


        if (mouseEvent == "mousedown"){
            ctx.beginpath();
            ctx.strokestyle = color;
            ctx.lineWidth = width_of_line;

            console.log("Last position of x and y cordinates = ");
           console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
           ctx.moveTo(last_position_of_x, last_position_of_y);

console.log("current position of x and y cordinates = ");
console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
ctx.lineTo(current_position_of_x, current_position_of_y);
ctx.stroke();
}

last_position_of_x= current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}

if (mouseEvent == "mousedown"){
    ctx.beginpath();
    ctx.strokestyle = color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius, 0, 2 *Math.PI)

    console.log("Last position of x and y cordinates = ");
   console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
   ctx.moveTo(last_position_of_x, last_position_of_y);

console.log("current position of x and y cordinates = ");
console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
ctx.lineTo(current_position_of_x, current_position_of_y);
ctx.stroke();
}
anvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
    }
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
       }


       function clearArea(){
           ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          }
    

