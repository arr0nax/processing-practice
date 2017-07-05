var systems;
var squareSize = 100;
var gridWidth;
var gridHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridWidth = windowWidth/squareSize;
  gridHeight = windowHeight/squareSize;
  systems = [];
  system1 = new ParticleSystem();
  system1.addParticles();
  systems.push(system1);
  system2 = new ParticleSystem();
  system2.particles = system1.particles;
  system2.angle = 1;
  systems.push(system2);
}

function draw() {
  // background(255/2*sin(frameCount/90)+255/2,255/2*sin(frameCount/100)+255/2, 255/2*sin(frameCount/110)+255/2);
  systems[1].origin = [(mouseX-windowWidth/2), (mouseY-windowHeight/2)];
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
  for (var s=0; s<systems.length; s++) {
    for(var i=0; i<systems[s].particles.length; i++) {
      for(var j=0; j<systems[s].particles[i].length; j++) {
        if (systems[s].particles[i][j][0]) {
          push();
          // stroke(255/2*sin(frameCount/100)+255/2,255/2*sin(frameCount/110)+255/2, 255/2*sin(frameCount/120)+255/2);
          fill(255/2*sin(frameCount/110)+255/2,255/2*sin(frameCount/120)+255/2, 255/2*sin(frameCount/130)+255/2);
          pointX = (i*squareSize);
          // nextX = (((i+1)*10)+systems[s].origin[0]);
          pointY = (j*squareSize);
          distance = systems[s].particles[i][j][1];
          // nextY = (((j+1)*10)+systems[s].origin[1]);
          newX = (distance*Math.cos(systems[s].angle * Math.PI/180));
          newX = pointX+newX+systems[s].origin[0];
          if (newX > windowWidth) {
            while (newX > windowWidth) {
              newX -= windowWidth;
            }
          } else if (newX < 0) {
            while (newX < 0) {
              newX += windowWidth
            }
          }
          newY = (distance*Math.sin(systems[s].angle * Math.PI/180));
          newY = newY+pointY+systems[s].origin[1];
          if (newY > windowHeight) {
            while (newY > windowHeight) {
              newY -= windowHeight;
            }
          } else if (newY < 0) {
            while (newY < 0) {
              newY += windowHeight
            }
          }
          rect(newX,newY,squareSize,squareSize);
          // rect(i*squareSize, j*squareSize, 10,10);
          pop();
          if(s===1){
            stroke(255/2*sin(frameCount/120)+255/2,255/2*sin(frameCount/130)+255/2, 255/2*sin(frameCount/140)+255/2);
            line(pointX,pointY,newX,newY);
          }
        } else {

        }
      }
    }
  }
  systems[1].angle += 0.5;
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
      if(int(random(0,6)) === 0) {
        this.particles[i].push([1,distance]);
      } else {
        this.particles[i].push([0,distance]);
      }
    }
  }
};

//*Math.sin(systems[s].angle * Math.PI/180)
//*Math.cos(systems[s].angle * Math.PI/180)
