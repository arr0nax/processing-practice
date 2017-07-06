var cameraZ = 0;
var schroja;
var vid;
var mySound;
var fingers;
var amplitude;
var fft;

function preload() {
  mySound = loadSound('sad wave.mp3');
}

function setup(){
  createCanvas(180, 120);
  fingers = createVideo(['poop.mov']);
  fingers.hide(); // by default video shows up in separate dom
                  // element. hide it and draw it to the canvas
                  // instead
  fingers.loop();
  mySound.setVolume(0.7);
  mySound.play();
  amplitude = new p5.Amplitude();
  fft = new p5.FFT(0.8,16);
}

function draw() {
  var spectrum = fft.analyze();
  var level = amplitude.getLevel();
  fingers.loadPixels();
  if(typeof fingers.pixels[0] !== 'undefined') {
    // fingers.pixels.forEach(alterPixels);
    for (var y=0; y<height; y++) {
      for (var x=0; x<width; x++) {
        var i = (y * width + x);
        stroke(fingers.pixels[4*i],fingers.pixels[4*i+1],fingers.pixels[4*i+2]);
        point(x,y);
      }
    }
  }
  // tint(Math.floor(spectrum[1]),Math.floor(spectrum[3]),Math.floor(spectrum[2]),level*255);
  // image(fingers,0,0,windowWidth,windowHeight); // draw a second copy to canvas
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseMove() {}
