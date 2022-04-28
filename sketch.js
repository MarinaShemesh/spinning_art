console.log('spinning art lines');

  
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(5);

  }



  function draw() {
	
    strokeWeight(2);
    
    // move (0,0) to centre of canvas
    translate(width/2, height/2);
    
    // angle increment
    var angle_step = 50;
    
    var x1 = random(-400, 400);
    var y1 = random(-400, 400);
    var x2 = random(-400, 400);
    var y2 = random(-400, 400);
    var x3 = random(-400, 400);
    var y3 = random(-400, 400);
    
    for (var i = 0; i < 360; i += angle_step) {
      rotate(angle_step);
      
      fill(0, 0, 200, 40);
      stroke(0, 0, 200, 80);
      line(x1, y1, x2, y2, x3, y3);
      
         
    }
    
  }
