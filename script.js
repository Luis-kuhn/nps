var circle = 300; //NUCLEO
var rot;
var col;
var freq = 0.000005;  
var cont = 0;
var r;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // BACKGROUND
  translate(width/2, height/2); //COORDENADAS AL CENTRO
  rotate(radians(rot)); //COORDENADAS DE ROTACIÓN

 ellipseMode(RADIUS); //PARTICULAS
  for (var i=0; i<500; i ++) {
    circle= 400 + 90*sin(millis()*freq*i);
    col=map( 200 + 50*sin(millis()*freq*i),150,250,255,60);
    r=map( 200 + 50*sin(millis()*freq*i),150,250,5,2);
    fill(col,0,74);
    noStroke();
    ellipse(circle*cos(i), circle*sin(i),r,r);    
    rot=rot+0.00005;
  }
}