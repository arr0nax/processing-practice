var systems;
var squareSize = 10;
var gridWidth;
var gridHeight;
var angle = 0;
var centerX;
var centerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridWidth = windowWidth/squareSize;
  gridHeight = windowHeight/squareSize;
  centerX = windowWidth/2;
  centerY = windowHeight/2;
  systems = [];
  system1 = new ParticleSystem();
  system1.addParticles();
  systems.push(system1);
  system2 = new ParticleSystem();
  system2.addParticles();
  for (var i=0; i<(gridWidth); i++) {
    for (var j=0; j<(gridHeight); j++) {
      system2.particles[i][j] = system1.particles[i][j];
    }
  }
  systems.push(system2);
}

function draw() {
  // background(255/2*sin(frameCount/90)+255/2,255/2*sin(frameCount/100)+255/2, 255/2*sin(frameCount/110)+255/2);
  background(255);
  // systems[1].origin = [(mouseX-windowWidth/2), (mouseY-windowHeight/2)];
//   switch(int(random(0,5))) {
//     case 0:
//       origin = [0.1,0];
//     break;
//     case 1:
//       origin = [0,0.1];
//         break;
//
//         case 1:
//           origin = [0.1,0.1];
//                 break;
//             case 1:
//               origin = [0,0];
//                         break;
//
//     default:
//     origin = [0,0];
//
// }
  // systems[1].angle = (mouseX/windowWidth)*10;
  for (var s=0; s<2; s++) {
    for(var i=0; i<systems[s].particles.length; i++) {
      for(var j=0; j<systems[s].particles[i].length; j++) {
        if (systems[s].particles[i][j][0]) {
          push();
          stroke(255/2*sin(frameCount/110)+255/2,255/2*sin(frameCount/120)+255/2, 255/2*sin(frameCount/130)+255/2);
          fill(255/2*sin(frameCount/110)+255/2,255/2*sin(frameCount/120)+255/2, 255/2*sin(frameCount/130)+255/2);

          pointX = i*squareSize;
          pointY = j*squareSize;
          if (s === 1) {
            systems[s].particles[i][j][1] += 0.005;
          }
          angle = systems[s].particles[i][j][1];

          distance = Math.pow((Math.pow(pointX-centerX,2) + Math.pow(pointY-centerY,2)),0.5);

          newX = centerX+(distance*Math.cos(angle));
          // if (newX > windowWidth) {
          //   while (newX > windowWidth) {
          //     newX -= windowWidth;
          //   }
          // } else if (newX < 0) {
          //   while (newX < 0) {
          //     newX += windowWidth
          //   }
          // }
          newY = centerY+(distance*Math.sin(angle));
          // newY = newY+pointY+systems[s].origin[1];
          // if (newY > windowHeight) {
          //   while (newY > windowHeight) {
          //     newY -= windowHeight;
          //   }
          // } else if (newY < 0) {
          //   while (newY < 0) {
          //     newY += windowHeight
          //   }
          // }
          rect(newX,newY,squareSize,squareSize);
          // rect(i*squareSize, j*squareSize, 10,10);
          pop();
          // if(s===1){
          //   stroke(255/2*sin(frameCount/120)+255/2,255/2*sin(frameCount/130)+255/2, 255/2*sin(frameCount/140)+255/2);
          //   line(pointX,pointY,newX,newY);
          // }
        // } else {

        }
      }
    }
  }
}

var ParticleSystem = function () {
  this.origin = [(gridWidth)/2,(gridHeight)/2];
  this.angle = 0;
  this.particles = [];
};

ParticleSystem.prototype.addParticles = function () {
  for (var i=0; i<(gridWidth); i++) {
    this.particles.push([]);
    for (var j=0; j<(gridHeight); j++) {
      distance = (Math.pow((Math.pow((i - this.origin[0]),2) + Math.pow((j - this.origin[1]),2)),0.5))*squareSize;

      pixelX = i*squareSize;
      pixelY = j*squareSize;
      angle = atan((pixelX-centerX)/(pixelY-centerY));
      console.log("point "+ i + ", "+j+ "is at "+angle+" degrees");


      if(int(random(0,6)) === 0) {
        this.particles[i].push([1,distance,angle]);
      } else {
        this.particles[i].push([0,distance,angle]);
      }
    }
  }
};

//*Math.sin(systems[s].angle * Math.PI/180)
//*Math.cos(systems[s].angle * Math.PI/180)
