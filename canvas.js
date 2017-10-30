var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext('2d');
//
// // c.fillStyle = "rgba(255, 0, 0, 0.5)";
// // c.fillRect(100, 100, 100, 100);
// // c.fillStyle = "rgba(0, 0, 255, 0.5)";
// // c.fillRect(400, 100, 100, 100);
// // c.fillStyle = "rgba(0, 255, 0, 0.5)";
// // c.fillRect(300, 300, 100, 100);
//
// // Drawing a Line
// // c.beginPath();
// // c.moveTo(50, 300);
// // c.lineTo(300, 100);
// // c.lineTo(400, 300);
// // c.strokeStyle = ("#FA34A3");
// // c.stroke();
//
// //Drawing Arcs / Circles
//
// // c.beginPath();
// // c.strokeStyle = "blue";
// // c.arc(300, 300, 30, 0, Math.PI * 2, false);
// // c.stroke();
//
//
// for (var i = 0; i < 10; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   var randomColor = "#" + ((1<<24) * Math.random()|0).toString(16);
//
//   c.beginPath();
//   c.strokeStyle = randomColor;
//
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.stroke();
// }

var mouse = {
  x: undefined,
  y: undefined
};

var maxRadius = 60;
var minRadius = 3;

var colorArray =[
  '#D8896A',
  '#D8892B',
  '#F3DAD3',
  '#5385A6',
  '#A72028',
];
console.log();

window.addEventListener('mousemove',
    function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);

});

window.addEventListener('resize',
    function() {
      canvas.width = window.innerWidth;
      canvas.height= window.innerHeight;
    });

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius; //goes back to circles original radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2,
        false);
      c.fillStyle = this.color;
      c.fill();
    };

  this.update = function() {
      if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

        // Interactivity Occurs Here

      if(mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
           mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    };
 }

  var circleArray = [];

  function init() {

    circleArray = [];

    for (var i = 0; i < 900; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 6;
        var dy = (Math.random() - 0.5) * 6;
        circleArray.push(new Circle (x, y, dx, dy, radius));
      }
  }


  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight
        );

    for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }

  }

  init();
  animate();
