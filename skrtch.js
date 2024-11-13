function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(255, 0, 255);
  
    noStroke(); //função para retirar a borda
  
    if (mouseIsPressed) {
      fill(255, 20, 147);
  
      rect(0, 0, 100, 100);
    } else {
      fill("red");
  
      rect(100, 100, 100, 100);
    }
  }
  