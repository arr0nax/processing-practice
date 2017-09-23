var systems;
var squareSize = 50;
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
  for (var s=1; s<systems.length; s++) {
    for(var i=0; i<systems[s].particles.length; i++) {
      for(var j=0; j<systems[s].particles[i].length; j++) {
        if (systems[s].particles[i][j][0]) {
          push();
          stroke(255/2*sin(frameCount/1100)+255/2,255/2*sin(frameCount/1200)+255/2, 255/2*sin(frameCount/1300)+255/2);
          fill(255/2*sin(frameCount/1100)+255/2,255/2*sin(frameCount/1200)+255/2, 255/2*sin(frameCount/1300)+255/2);
          pointX = (i*squareSize);
          pointY = (j*squareSize);
          distance = systems[s].particles[i][j][1];

          newX = (distance*Math.cos(systems[s].angle * Math.PI/180));
          newX = pointX+newX+systems[s].origin[0];
          newY = (distance*Math.sin(systems[s].angle * Math.PI/180));
          newY = newY+pointY+systems[s].origin[1];
          ellipse(newX,newY,squareSize,squareSize);
          pop();
        }
      }
    }
  }
  systems[1].angle += 0.05;
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
      if(int(random(0,3)) === 0) {
        this.particles[i].push([1,distance]);
      } else {
        this.particles[i].push([0,distance]);
      }
    }
  }
};

//*Math.sin(systems[s].angle * Math.PI/180)
//*Math.cos(systems[s].angle * Math.PI/180)

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
