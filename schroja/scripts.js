var cameraZ = 0;
var schroja;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  schroja = loadModel('CrossofCalvary.obj', true);
  console.log(schroja);
}

function draw(){
  // background(200);

  ambientLight(200,200,200);
  orbitControl();
  model(schroja);
  // normalMaterial();
  camera(0,0,cameraZ);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
  cameraZ += event.delta;
}

function mouseMove() {}
