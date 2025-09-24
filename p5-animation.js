let particles = [];
let zoff = 0;
let myCanvas; // ¡Declaramos myCanvas aquí para poder usarlo!

// paleta de colores
const palette = [
  '#8048B3',
  '#452A7B',
  '#2F126C',
  '#FB3260',
  '#FC6E3E',
  '#FC9248',
  '#E9C37A'
];

function setup() {
  const introSection = document.getElementById('intro-section');

  // Creamos el canvas para que ocupe el tamaño de #intro-section
  // (Que en nuestro CSS tiene 100vw y 100vh)
  myCanvas = createCanvas(introSection.offsetWidth, introSection.offsetHeight);

  // Adjuntamos el canvas al div intro-section
  myCanvas.parent('intro-section');

  // Aseguramos que el canvas se muestre correctamente
  myCanvas.style('display', 'block');
  myCanvas.style('z-index', '0'); // Ya su padre es z-index -2, este estará encima, pero debajo del overlay.

  background(0,5); // Tu fondo inicial de P5.js

  // Crea 10000 partículas
  for (let i = 0; i < 10000; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  background(0, 5); // Tu fondo ligeramente transparente

  let scl = 10; 

  for (let i = 0; i < particles.length; i++) {
    let x = floor(particles[i].pos.x / scl);
    let y = floor(particles[i].pos.y / scl);

    let angle = noise(x * 0.1, y * 0.1, zoff) * TWO_PI * 4;

    let v = p5.Vector.fromAngle(angle);
    v.setMag(1);

    particles[i].applyForce(v);
    particles[i].update();
    particles[i].show();
  }

  zoff += 0.001; 
}

// Asegura que el canvas se redimensione para ajustarse a introSection
function windowResized() {
    const introSection = document.getElementById('intro-section');
    if (introSection) {
        resizeCanvas(introSection.offsetWidth, introSection.offsetHeight);
    }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 4;

    this.color = color(random(palette)); 
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.edges();
  }

  show() {
    noStroke();
    fill(this.color, 150);
    circle(this.pos.x, this.pos.y, 1);
  }

  edges() {
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;
  }
}