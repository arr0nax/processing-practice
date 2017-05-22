var img;
var vid;
var theta = 0;
var posX;
var posY;
var posZ;
var q = 0;
var balls = [];
var cameraX = 0;
var cameraY = 0;
var cameraZ = 0;
var can;

var Bounce = function() {
  this.acceleration = createVector(0,0,0);
  this.velocity = createVector(random(-5,5),random(-5,5),random(-5,5));
  this.position = createVector(random(-500,500),random(-500,500),random(-500,500));
  this.dimensions = createVector(random(20,100),random(40,100),random(60,100));
}

Bounce.prototype.update = function () {
  this.position.add(this.velocity);
  // if(Math.sqrt(Math.pow(this.position.x,2) + Math.pow(this.position.y,2) + Math.pow(this.position.z,2)) > 500) {
  //   // this.velocity = createVector(random(-5,5),random(-5,5),random(-5,5));
  //   this.velocity.x = -this.velocity.x;
  //   this.velocity.y = -this.velocity.y;
  //   this.velocity.z = -this.velocity.z;
  // }
  if (this.position.x > 1000 || this.position.x < -1000) {
    this.velocity.x = -this.velocity.x;
  }
  if (this.position.y > 1000 || this.position.y < -1000) {
    this.velocity.y = -this.velocity.y;
  }
  if (this.position.z > 1000 || this.position.z < -1000) {
    this.velocity.z = -this.velocity.z;
  }
};



function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  // ortho(-width/2, width/2, height/2, -height/2, 0, 500);
  perspective(180,width/height,48,600)
  vid = createVideo(["space.mp4"]);
  vid.loop();
  vid.hide();
  vid.pause();
  vid.showControls();
  kate = loadImage('kate.png');
  can = loadImage('hamms.jpg');
  for (var i=0;i<10;i++){
    balls.push(new Bounce());
  }
}

function draw(){
  background(150*sin((100+frameCount)/100)+150,150*sin((200+frameCount)/80)+150, 150*sin((300+frameCount)/60)+150);
  camera(0,0,485);
  rotateX((frameCount)/300);
  rotateY((frameCount)/300);

  // $('#jumbotron').text(frameCount);

  push();
  // ambientMaterial(250);
  sphere(1000);
  pop();

  // for(var i=0; i<balls.length; i++){
  //   translate(balls[i].position.x,balls[i].position.y,balls[i].position.z);
  //   push();
  //   // rotateY((mouseY/height)*4*PI - (width/2));
  //   // rotateX((mouseX/width)*4*PI - (height/2));
  //   plane(balls[i].dimensions.x*100,balls[i].dimensions.y*100);
  //   pop();
  //   balls[i].update();
  //   translate(-balls[i].position.x,-balls[i].position.y,-balls[i].position.z);
  // }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
  cameraZ += event.delta;
}

function mouseMove() {}
