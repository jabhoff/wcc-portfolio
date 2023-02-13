let canvas;
let button;
let slider;
let displayState = 0;

let button1;
let displayState1 = 0;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  createEasyCam();
  addGUI();


}

function draw() {
  background(100);
  

  noStroke();
  lights();
  ambientMaterial(slider.value(), 0, 100);

  if(displayState == 0){
    sphere(100);
  }else{
    box(100);
  }

  if(displayState1 == 0){
    torus(100,50);
  }else{
    cone(100,100);
  }
}

function addGUI()
{
  //add a slider
  slider = createSlider(0, 200, 50);
  slider.addClass("slider");
  //Add the slider to the parent gui HTML element
  slider.parent("gui-container");


  //add a button
  if(displayState == 0)
  {
      button = createButton("Change to Square");
  }else if(displayState == 1){
      button = createButton("Change to Circle");
  }

  if(displayState1 == 0)
  {
      button1 = createButton("Change to Torus");
  }else if(displayState1 == 1){
      button1 = createButton("Change to Cone");
  }


  button.addClass("button");

  //Add the play button to the parent gui HTML element
  button.parent("gui-container");
  
  //Adding a mouse pressed event listener to the button 
  button.mousePressed(handleButtonPress); 

  button1.addClass("button1");

  //Add the play button to the parent gui HTML element
  button1.parent("gui-container");
  
  //Adding a mouse pressed event listener to the button 
  button1.mousePressed(handleButtonPress1); 

}

function handleButtonPress()
{
    
  if(displayState < 1)
  {
    displayState++;
  }else{
    displayState = 0;
  }

  if(displayState == 0)
  {
      button.html("Change to Square");
  }else if(displayState == 1){
      button.html("Change to Circle");
  }
}


function handleButtonPress1()
{
    
  if(displayState1 < 1)
  {
    displayState1++;
  }else{
    displayState1 = 0;
  }

  if(displayState1 == 0)
  {
      button1.html("Change to Torus");
  }else if(displayState1 == 1){
      button1.html("Change to Cone");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}