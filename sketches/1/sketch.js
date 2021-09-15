function setup() {
  createCanvas(800, 800);
  background(0);
  x = width;
  y = height;
}

function draw() {
  background(0);
  if (mouseX < 300 && mouseY < 300) {
      background(0);
      pattern();
  }
  else if (mouseX > 300 && mouseY < 300) {
      background(65);
      pattern2();
  }
  else if (mouseX < 300 && mouseY > 300) {
      background(130);
      pattern3();
  }
  else if (mouseX > 300 && mouseY > 300) {
      background(255);
      pattern4();
  }

  function pattern() {
      for (y = height; y > 0; y--) {
          for (x = width; x > 0; x--) {
              let r = random(50);
              fill(r * 5)
              stroke(255, 204, 0)
              rect(50 * x, 50 * y, 50, 50)
          }
      }
  }

  function pattern2() {
      for (y = height; y > 0; y--) {
          for (x = width; x > 0; x--) {
              let r = random(50);
              fill(65)
              stroke(r * 5)
              rect(50 * x, 50 * y, 50, 50)
          }
      }
  }

  function pattern3() {
      for (y = height; y > 0; y--) {
          for (x = width; x > 0; x--) {
              let r = random(50);
              fill(130)
              stroke(r * 5)
              circle(50 * x, 50 * y, 100)
          }
      }
  }

  function pattern4() {
      for (y = height; y > 0; y--) {
          for (x = width; x > 0; x--) {
              let r = random(50);
              fill(r * 5)
              stroke(255, 204, 0)
              circle(50 * x, 50 * y, 100)
          }
      }
  }
}