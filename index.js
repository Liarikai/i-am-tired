/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />

var x = new Array(10);  
var y = new Array(10);  
var segLength = 10;                                 
const Font = "Dancing Script";

function setup() {                          
  createCanvas(640, 360);                   
  
                       
                         
  for(var i=0; i<x.length; i++) {         
    x[i]=0;
    y[i]=0;
  }
  
}
  

function draw() {                          
  background(0, 51, 102); 
  textSize(30);
  textAlign(CENTER, TOP);
  noStroke()
  textFont(Font);
  text('Willy the Wiggly Jellyfish', width/2, 30);  
  fill(255, 162, 228)
  arc(mouseX, mouseY, 90, 90, 3*QUARTER_PI, QUARTER_PI, CHORD)
  strokeWeight(9); 
  stroke(255, 162, 228); 

  for(var iter=0; iter<4;iter++){
    drawSegment(0, mouseX-30, mouseY+30,iter);           
    for(var i=0; i<x.length-1; i++) {         
      drawSegment(i+1, x[i], y[i],iter);           
      }
    
    }
 
  
}

function drawSegment(i, xin, yin, iteration) {    
  
  var dx = xin - x[i] ;                      
  var dy = yin - y[i];                      
  var angle = atan2(dy, dx);                
  x[i] = xin - cos(angle) * segLength;      
  y[i] = yin - sin(angle) * segLength;
  
  segment(x[i]+(iteration*20), y[i], angle);               
}

function segment(x, y, a) {                 
  push();                            		
  translate(x, y);                          
  rotate(a);                               
  line(0, 0, segLength, 0);                 
  pop();                              		
}


