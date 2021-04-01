var canvas = new fabric.Canvas('myCanvas');
looks_image_width=30;
looks_image_height=30;
player_x=10;
player_y=10;
var player_object="";
var looks_image_object="";
function player_update()
{
    fabric.Image.fromURL("ironman.jpg", function(img) {
        player_object.scaletoWidth(150);
        player_object.scaletoHeight(140);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) 
{
    fabric.Image.fromURL(get_image, function(Img) {
        looks_image_object=Img;
        looks_image_object.scaletoWidth(looks_image_width);
        looks_image_object.scaletoHeight(looks_image_height);
        looks_image_object.set({
            top:player_y,
            left:player_x

        });
        canvas.add(looks_image_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("b and shift pressed together");
        looks_image_width = looks_image_width + 10;
        looks_image_height = looks_image_height + 10;
        document.getElementById("current_width").innerHTML = looks_image_width;
        document.getElementById("current_height").innerHTML = looks_image_height;
    }
    if(e.shiftKey && keyPressed == '77')
    {
        console.log("tab and shift pressed together");
        looks_image_width = looks_image_width - 10;
        looks_image_height = looks_image_height - 10;
        document.getElementById("current_width").innerHTML = looks_image_width;
        document.getElementById("current_height").innerHTML = looks_image_height;

    }
    if(keyPressed == '87')
    {
        up();
        console.log("w");
    }
    if(keyPressed == '83')
    {
        down();
        console.log("s");
    }
    if(keyPressed == '65')
    {
        left();
        console.log("a");
    }
    if(keyPressed == '68')
    {
        right();
        console.log("d");
    }
    if(keyPressed == '69')
    {
        new_image('spiderman.jpg');
        console.log("e");
    }
    if(keyPressed == '88')
    {
        new_image('thor.jpg');
        console.log("x");
    }
    if(keyPressed == '67')
    {
        new_image('hulk.jpg');
        console.log("c");
    }
    if(keyPressed == '86')
    {
        new_image('ironman.jpg');
        console.log("v");
    }
    
function up()
{
if(player_y >=0)
{
    player_y = player_y - looks_image_height;
    console.log("block image height ="+ looks_image_height);
    console.log("When up arrow key is pressed, X = " + player_x + " , Y"+player_y);
    canvas.remove(player_object);
    player_update();
}

}
function down()
{
    if(player_y <=0)
    {
        player_y=player_y + looks_image_height;
        console.log("block image height"-looks_image_height);
        console.log("When down arrow key is pressed, X =" + player_x + " , Y"+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_x >=0)
    {
        player_x = player_x - looks_image_width;
        console.log("block image height ="+ looks_image_width);
        console.log("When right arrow is pressed, X =" + player_x +" , Y"+player_y);
        canvas.remove(player_object);
        player_update
    }
}
function left()
{
    if(player_x <=0)
    {
        player_x=player_x + looks_image_width;
        console.log("block image height"-looks_image_width);
        console.log("When left arrow key is pressed, X =" + player_x + " , Y"+player_y);
        canvas.remove(player_object);
        player_update();
        }
    }
}