// You can start from this outline to write your "Hungry Bird" game
// where objects drop and you try to catch them.
let groundLevel;
let puppyHeight;
let textOffset;
function setup() {
  groundLevel = 325;
  puppyHeight = 60;
  textOffset = 30;

  // ADD CONSTANT VARIABLES
  // Set values here that don't change over the course of the game,
  // but are convenient to name as variables because they are used
  // throughout the code. Eg, "groundY" could be the height of the ground.

  // ADD CHANGING VARIABLES
  // Set an initial value for variables here that may change later.
  // Eg, "birdX = 0" could start the catcher at the canvas' left edge.
  // "seedIsFalling = false" could ensure it doesn't fall until triggered.

  // Set up the canvas.
  createCanvas(400, 400);
  angleMode(DEGREES); // Use this to create shapes with arcs and degrees.
}

function draw() {
  // BACKGROUND
  // Draw the background color and any other shapes that don't change.
  background("skyblue");
  noStroke();
  fill("hsl(85,60%,50%)");
  rect(0, groundLevel, width, 100);

  // ADD CATCHER
  // Add your catcher by calling its function with appropriate parameters.
  puppy(mouseX, groundLevel, 0.75);

  if (mouseIsPressed) {
    woof();
  }

  // ADD SEED
  // Add the falling shape, either directly here or via a function.
  // This code could include animating the fall, or checking for conditions.
}

// CATCHER
// Add a function here to build your "catcher" from shapes.
// This function can include parameters that tell it where to sit
// as well as conditions that change its appearance.
function puppy(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  fill("peru");
  ellipse(0, 0, 60, 40);
  rect(0, 10, 75, 40);

  ellipse(5, 55, 10, 35);
  ellipse(25, 55, 10, 50);
  ellipse(50, 55, 10, 35);
  ellipse(70, 55, 10, 50);

  ellipse(2, 67, 13);
  ellipse(22, 74, 13);
  ellipse(47, 67, 13);
  ellipse(67, 74, 13);

  ellipse(75, 10, 10, 20);
  ellipse(25, -15, 20, 10);
  ellipse(-20, -20, 20, 10);

  fill("hsl(65,40%,20%)");
  ellipse(-15, 5, 10);
  ellipse(-20, -2, 7);
  ellipse(5, 0, 7);
  pop();
}

function woof() {
  noFill();
  stroke("dodgerblue");
  strokeWeight(6);
  beginShape();
  vertex(mouseX - 30, groundLevel - puppyHeight);
  vertex(mouseX - 22, groundLevel - puppyHeight + 13);
  vertex(mouseX - 20, groundLevel - puppyHeight + 2);
  vertex(mouseX - 13, groundLevel - puppyHeight + 10);
  vertex(mouseX - 10, groundLevel - puppyHeight - 2);
  endShape();

  // beginShape();
  // vertex(mouseX-5,groundLevel-puppyHeight)
  // endShape();
  ellipse(mouseX + 4, groundLevel - puppyHeight + 6, 17);
  ellipse(mouseX + 27, groundLevel - puppyHeight + 8, 17);

  beginShape();
  vertex(mouseX + 42, groundLevel - puppyHeight + 15);
  vertex(mouseX + 42, groundLevel - puppyHeight);
  vertex(mouseX + 48, groundLevel - puppyHeight - 1);
  endShape();
  line(
    mouseX + 42,
    groundLevel - puppyHeight + 10,
    mouseX + 46,
    groundLevel - puppyHeight + 10
  );

  line(
    mouseX + 58,
    groundLevel - puppyHeight + 10,
    mouseX + 59,
    groundLevel - puppyHeight
  );
  point(mouseX + 58, groundLevel - puppyHeight + 20);
}
