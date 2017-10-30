/*Canvas Variables*/
var canvas;
var ctx;
var width = 600;
var height = 600;
var ship_x = (width / 2) - 25, ship_y = height - 75, ship_w = 50, ship_h = 50;

/*Direction Pad Variables */
var rightKey = false,
    leftKey = false,
    upKey = false,
    downKey = false;

/*Using the clearRect function, we set it to clear the entire canvas.*/
function clearCanvas() {
  ctx.clearRect(0,0,width,height);
}

/* DrawShip function, we set the fillStyle to green and then use
fillRect to set the ship’s x and y positions and it’s width and height. */
function drawShip() {
  ctx.fillStyle = '#0f0';
  ctx.fillRect(ship_x, ship_y, ship_w, ship_h);
}

/* init function we use with the window.onload to get everything started. */
function init() {

  /* Target Canvas element*/
  canvas = document.getElementById('canvas');

  /* Get canvas' context */
  ctx = canvas.getContext('2d');

  /* We use setInterval to call the
     gameLoop function every 25
     milliseconds.*/
  setInterval(gameLoop, 25);

  /* Event listeners to listen for both
     keys being pressed down and keys
     being released.*/
  document.addEventListener('keydown', keyDown, false);
  document.addEventListener('keyup', keyUp, false);
}

/*gameLoop function we call clearCanvas and drawShip.*/
function gameLoop() {
  clearCanvas();
  drawShip();
}

function keyDown(e) {
  if (e.keyCode == 39) rightKey = true;
  else if (e.keyCode == 37) leftKey = true;
  if (e.keyCode == 38) upKey = true;
  else if (e.keyCode == 40) downKey = true;
}

function keyUp(e) {
  if (e.keyCode == 39) rightKey = false;
  else if (e.keyCode == 37) leftKey = false;
  if (e.keyCode == 38) upKey = false;
  else if (e.keyCode == 40) downKey = false;
}

window.onload = init;
