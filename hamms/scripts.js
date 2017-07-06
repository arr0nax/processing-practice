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
var can_accel = 1;

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
  perspective(180,width/height,48,5000);
  vid = createVideo(["space.mp4"]);
  vid.loop();
  vid.hide();
  vid.pause();
  vid.showControls();
  kate = loadImage('spam.jpg');
  can = loadImage('hamms.jpg');
  for (var i=0;i<10;i++){
    balls.push(new Bounce());
  }
}

function draw(){
  // ambientLight(150*sin(frameCount/100)+150,150*sin(frameCount/100)+150, 150*sin(frameCount/100)+150);
  // pointLight(1000, 1000, 1000, 0, 0, 300);
  translate(0,0,350);
  directionalLight(150*sin((100+frameCount)/100)+150,150*sin((200+frameCount)/100)+150, 150*sin((300+frameCount)/100)+150, 0,0, -1);
  translate(0,0,-350);


  background(255);
  translate(0,0,200);
  push();
    rotateY((-frameCount*0.01));
    texture(can);
    cylinder(100,400,100,100);
  pop();
  camera(0,0,48);

  // $('#jumbotron').text(frameCount);

  translate(0,0,-200);
  push();
    rotateY((frameCount)/100);
    rotateX((frameCount)/100);
    // normalMaterial();
    specularMaterial(250);
    sphere(1000);
  pop();

  for(var i=0; i<balls.length; i++){
    translate(balls[i].position.x,balls[i].position.y,balls[i].position.z);
    push();
      rotateY((mouseY/height)*4*PI - (width/2));
      rotateX((mouseX/width)*4*PI - (height/2));
      texture(kate);
      rotateY((frameCount)/100);
      rotateX((frameCount)/100);
      box(balls[i].dimensions.x,balls[i].dimensions.y,balls[i].dimensions.z);
    pop();
    balls[i].update();
    translate(-balls[i].position.x,-balls[i].position.y,-balls[i].position.z);
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
  cameraZ += event.delta;
}

// function mouseMove() {}
