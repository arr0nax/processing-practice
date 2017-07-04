var systems;
var squareSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  background(255/2*sin(frameCount/90)+255/2,255/2*sin(frameCount/100)+255/2, 255/2*sin(frameCount/110)+255/2);
  // systems[1].origin = [(mouseX-windowWidth/2)/100, (mouseY-windowHeight/2)/50];
  // systems[1].angle = (mouseX/windowWidth)*10;
  for (var s=0; s<systems.length; s++) {
    for(var i=0; i<systems[s].particles.length; i++) {
      for(var j=0; j<systems[s].particles[i].length; j++) {
        if (systems[s].particles[i][j]) {
          push();
          // stroke(255/2*sin(frameCount/100)+255/2,255/2*sin(frameCount/110)+255/2, 255/2*sin(frameCount/120)+255/2);
          fill(255/2*sin(frameCount/110)+255/2,255/2*sin(frameCount/120)+255/2, 255/2*sin(frameCount/130)+255/2);
          pointX = (i*squareSize);
          // nextX = (((i+1)*10)+systems[s].origin[0]);
          pointY = (j*squareSize);
          // nextY = (((j+1)*10)+systems[s].origin[1]);
          distance = Math.pow(Math.pow((pointX - systems[s].origin[0]),2) + Math.pow((pointY - systems[s].origin[1]),2),0.5);
          newX = (distance*Math.cos(systems[s].angle * Math.PI/180));
          newY = (pointY + distance*Math.sin(systems[s].angle * Math.PI/180));
          rect(newX,newY,10,10);
          // rect(i*squareSize, j*squareSize, 10,10);
          pop();
          if(s==1){
            stroke(255/2*sin(frameCount/120)+255/2,255/2*sin(frameCount/130)+255/2, 255/2*sin(frameCount/140)+255/2);
            line(pointX,pointY,newX,newY);
          }
        } else {

        }
      }
    }
  }
  systems[1].angle += 0.1;
}

var ParticleSystem = function () {
  this.origin = [(windowWidth/squareSize)/2,(windowHeight/squareSize)/2];
  this.angle = 0;
  this.particles = [];
};

ParticleSystem.prototype.addParticles = function () {
  for (var i=0; i<(windowHeight/squareSize); i++) {
    this.particles.push([]);
    for (var j=0; j<(windowWidth/squareSize); j++) {
      if(int(random(0,6)) === 0) {
        this.particles[i].push(1);
      } else {
        this.particles[i].push(0);
      }
    }
  }
};

//*Math.sin(systems[s].angle * Math.PI/180)
//*Math.cos(systems[s].angle * Math.PI/180)
