var cameraZ = 0;
var schroja;
var vid;



function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  // ortho(-width/2, width/2, height/2, -height/2, 0, 500);
  // perspective(180,width/height,48,600);
  vid = createVideo(["marconics.webm"]);
  vid.loop();
  vid.hide();
  // vid.showControls();
  // kate = loadImage('kate.png');
  // can = loadImage('hamms.jpg');
  // for (var i=0;i<10;i++){
  //   balls.push(new Bounce());
  // }
  // schroja = loadModel('schroja.obj');
}

function draw(){
  // background(150*sin((100+frameCount)/100)+150,150*sin((200+frameCount)/80)+150, 150*sin((300+frameCount)/60)+150);
  // camera(0,0,0);
  // rotateX((frameCount)/300);
  // rotateY((frameCount)/300);

  // push();
  // texture(vid);
  // plane(200,200);
  // pop();
  // orbitControl();
  // ambientMaterial(250);
  // model(schroja);
  // $('#jumbotron').text(frameCount);


  push();
  texture(vid);
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
