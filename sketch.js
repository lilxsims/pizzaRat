//click will allow the user to click on the sketch to place the pizza topping
//drag will allow the user to drag the mouse to draw the cheese
var click, drag;

function setup() {
  var canvas = createCanvas(500, 500);
  
  //relocating canvas with HTML id
  canvas.parent('sketch');
  
  background(100,150,232);

  //pizza crust
  fill(191,135,59);
  ellipse(250, 250, 250, 250);
  
  //main pizza section
  fill(219,162,74);
  ellipse(250, 250, 200, 200);

  //variable color value
  click = color(0);
  drag = color(0);
  
  //button to draw cheese
  button = createButton("Cheese");
  button.position(175, 640);
  button.mouseClicked(cheese);
  
  //button to place mushrooms
  button = createButton('Mushroom');
  button.position(175, 665);
  button.mouseClicked(mushrooms);

  //button to place olives
  button = createButton('Olives');
  button.position(175, 690);
  button.mouseClicked(olives);
  
  //button to place pepperoni
  button = createButton('Pepperoni');
  button.position(175,715);
  button.mouseClicked(pepperoni);
}

function draw() {
  // put drawing code here
  noStroke();
}

function mouseClicked() {
  stroke(click);
  line(mouseX, mouseY, pmouseX, pmouseY);
  //rect(mouseX, mouseY, 50,50);
}

function mouseDragged() {
  stroke(drag);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

//pepperoni toping 
function pepperoni() {
  strokeWeight(30);
  click = color(165, 28, 28);
}

//olive topping
function olives() {
  strokeWeight(7);
  click = color(0, 0, 0);
}

//mushroom topping
function mushrooms() {
  strokeWeight(15);
  click = (216,204,192); 
}

//cheese topping
function cheese() {
  strokeWeight(30);
    click = color(252, 243, 217);
  strokeWeight(45);
    drag = color(252, 243, 217);
}
