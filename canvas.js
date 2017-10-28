var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 0, 255, 0.5)";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(300, 300, 100, 100);

// Drawing a Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = ("#FA34A3");
// c.stroke();

//Drawing Arcs / Circles

// c.beginPath();
// c.strokeStyle = "blue";
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.stroke();


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

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radiuse = radius;

  this.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2,
        false);
      c.strokeStyle = 'blue';
      c.stroke();
    };

  this.update = function() {
      if(this.x + this.radius > innerWidth || this.x - this.radius < 0)
        {
        this.dx = this.dx;
        }

      if(this.y + this.radius > innerHeight || this.y - this.radius < 0)
        {
        this.dy = this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
  };
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 0.5) * 10;
    var dy = (Math.random() - 0.5) * 10;
    var radius = 30;
    circleArray.push(new Circle (x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight
      );

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false
      );
  c.strokeStyle = 'blue';
  c.stroke();

  if(x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }

  if(y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}

animate();