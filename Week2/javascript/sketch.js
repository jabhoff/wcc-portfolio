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
  background(0);
  

  noStroke();
  lights();
  ambientMaterial(slider.value(), random(100,255), random(100,255));

  if(displayState == 0){
    sphere(80);
  }else{
    sphere(60);
  }

  if(displayState1 == 0){
    torus(100,10);
  }else{
    rotateX(millis() / 1000);
    rotateY(millis() / 1000);
    torus(100,10);
  }
}

function addGUI()
{
  //add a slider
  slider = createSlider(0, 255, 100);
  slider.addClass("slider");
  //Add the slider to the parent gui HTML element
  slider.parent("gui-container");


  //add a button
  if(displayState == 0)
  {
      button = createButton("Smaller");
  }else if(displayState == 1){
      button = createButton("Bigger");
  }

  if(displayState1 == 0)
  {
      button1 = createButton("Live");
  }else if(displayState1 == 1){
      button1 = createButton("Dead");
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
      button.html("Smaller");
  }else if(displayState == 1){
      button.html("Bigger");
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
      button1.html("Live");
  }else if(displayState1 == 1){
      button1.html("Dead");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}