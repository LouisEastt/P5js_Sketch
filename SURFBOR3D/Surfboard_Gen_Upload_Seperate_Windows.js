//Surfboard Generator
//..WEB Testing
//.. 12 September 2020

var myFont;

function preload(){
 myFont=loadFont('data/GoshaSans-Regular.otf'); 
}

function setup() {
  createCanvas(windowWidth,windowHeight);  
  textSize(15);
  textAlign(CENTER,CENTER);
  textFont(myFont);
  text('Welcome to SURFBOR3D. Inspired by what a surfboard cannot be? Have fun exploring!',windowWidth/2,(windowHeight/6)*5);
  textSize(200);
  textFont(myFont);
  textAlign(CENTER,CENTER);
  text('SURFBOR3D',windowWidth/2,windowHeight/8);
}

function draw() {  
  fill(0);

  textSize(15);
  text('LEFT ARROW',windowWidth/6,windowHeight/20);
  text('UP ARROW',windowWidth/2,windowHeight/20);
  text('RIGHT ARROW',(windowWidth/6)*5,windowHeight/20);
  textSize(15);
  text('SURFBOR3D',(windowWidth/6)*5,(windowHeight/20)*19);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW){
    background(255);  //Clear other info
    fill(42,232,126); //Colour Green 
    rect(0,0,windowWidth/3,windowHeight); //Background Window
    
    translate(-50,0);
    xNose = int(random(100,500)); //Nose (x)
    yNose = int(random(50,300));  //Nose (y)

    xRailL = int(random(50,250));  //Left Rail (x)
    yRailL = int(random(300,550)); //Left Rail (y)

    xRailR = int(random(350,550)); //Right Rail (x)
    yRailR = int(random(300,550)); //Right Rail (y)

    xTailL = int(random(100,250)); //Left Tail (x)
    yTailL = int(random(600,800)); //Left Tail (y)

    xTailR = int(random(350,500)); //Left Tail (x)
    yTailR = int(random(600,800)); //Left Tail (y)

    xTail  = int(random(250,350)); //Middle Tail (x)
    yTail  = int(random(600,800)); //Middle Tail (y)

    curv = random(-40,40);         // Curve distance of controll pt
   
    //Curve from Nose To Rail Right
  bezier(xNose,yNose,((xRailR+xNose)/2)+curv,((yRailR+yNose)/2)+curv,((xRailR+xNose)/2)+curv,((yRailR+yNose)/2)+curv,xRailR,yRailR);
  
    //Curve From Rail Right to Tail Right 
  bezier(xRailR,yRailR,((xRailR+xTailR)/2)+curv,((yRailR+yTailR)/2)+curv,((xRailR+xTailR)/2)+curv,((yRailR+yTailR)/2)+curv,xTailR,yTailR);
  
    //Curve from Tail Right to Tail Middle
  bezier(xTailR,yTailR,((xTailR+xTail)/2)+curv,((yTailR+yTail)/2)+curv,((xTailR+xTail)/2)+curv,((yTailR+yTail)/2)+curv,xTail,yTail);

    //Curve from Tail Middle to Tail Left
  bezier(xTail,yTail,((xTail+xTailL)/2)+curv,((yTail+yTailL)/2)+curv,((xTail+xTailL)/2)+curv,((yTail+yTailL)/2)+curv,xTailL,yTailL);
  
    //Curve from Tail Left to Rail Left
  bezier(xTailL,yTailL,((xTailL+xRailL)/2)+curv,((yTail+yRailL)/2)+curv,((xTail+xRailL)/2)+curv,((yTail+yRailL)/2)+curv,xRailL,yRailL);
  
    //Curve from Tail Left to Nose
  bezier(xRailL,yRailL,((xRailL+xNose)/2)+curv,((yRailL+yNose)/2)+curv,((xRailL+xNose)/2)+curv,((yRailL+yNose)/2)+curv,xNose,yNose);
  
}  
  
  
  if(keyCode === UP_ARROW){
   //Surfboard Generator 002
    
    //Background... 
      background(255);  //Clear other info
      fill(224,94,175);
      rect(windowWidth/3,0,windowWidth/3,windowHeight);
    
    //Translate 
      translate((windowWidth/3)-50,0);
    
    //Setup Positions for Anchor Points 
     xNoseL = int(random(100,270)); //Nose (x)
     yNoseL = int(random(100,300));  //Nose (y)

     xNose  = int(random(270,330));  //Left Rail (x)
     yNose  = int(random(100,300)); //Left Rail (y)
  
     xNoseR = int(random(330,500)); //Right Rail (x)
     yNoseR = int(random(100,300)); //Right Rail (y)

     xRailL = int(random(80,270)); //Left Rail (x)
     yRailL = int(random(300,600)); //Left Rail (y)

     xRailR = int(random(330,520)); //Right Rail (x)
     yRailR = int(random(300,600)); //Right Rail (y)

     xTailL = int(random(100,270)); //Left Tail (x)
     yTailL = int(random(600,800)); //Left Tail (y)

     xTail  = int(random(250,350)); //Middle Tail (x)
     yTail  = int(random(600,800)); //Middle Tail (y)

     xTailR = int(random(330,550)); //Left Tail (x)
     yTailR = int(random(600,800)); //Left Tail (y)
    
     curv = int(random(-40,40));

  
  //Curve From Nose Left to Nose Middle
  bezier(xNoseL,yNoseL,((xNoseL+xNose)/2)+curv,((yNoseL+yNose)/2)+curv,((xNoseL+xNose)/2)+curv,((yNoseL+yNose)/2)+curv,xNose,yNose);    
    
    //Curve From Nose Middle to Nose Right
  bezier(xNose,yNose,((xNose+xNoseR)/2)+curv,((yNose+yNoseR)/2)+curv,((xNose+xNoseR)/2)+curv,((yNose+yNoseR)/2)+curv,xNoseR,yNoseR);    
    
    //Curve from Nose Right To Rail Right
  bezier(xNoseR,yNoseR,((xRailR+xNoseR)/2)+curv,((yRailR+yNoseR)/2)+curv,((xRailR+xNoseR)/2)+curv,((yRailR+yNoseR)/2)+curv,xRailR,yRailR);
  
    //Curve From Rail Right to Tail Right 
  bezier(xRailR,yRailR,((xRailR+xTailR)/2)+curv,((yRailR+yTailR)/2)+curv,((xRailR+xTailR)/2)+curv,((yRailR+yTailR)/2)+curv,xTailR,yTailR);
  
    //Curve from Tail Right to Tail Middle
  bezier(xTailR,yTailR,((xTailR+xTail)/2)+curv,((yTailR+yTail)/2)+curv,((xTailR+xTail)/2)+curv,((yTailR+yTail)/2)+curv,xTail,yTail);

    //Curve from Tail Middle to Tail Left
  bezier(xTail,yTail,((xTail+xTailL)/2)+curv,((yTail+yTailL)/2)+curv,((xTail+xTailL)/2)+curv,((yTail+yTailL)/2)+curv,xTailL,yTailL);
  
    //Curve from Tail Left to Rail Left
  bezier(xTailL,yTailL,((xTailL+xRailL)/2)+curv,((yTail+yRailL)/2)+curv,((xTail+xRailL)/2)+curv,((yTail+yRailL)/2)+curv,xRailL,yRailL);
  
    //Curve from Tail Left to Nose
  bezier(xRailL,yRailL,((xRailL+xNoseL)/2)+curv,((yRailL+yNoseL)/2)+curv,((xRailL+xNoseL)/2)+curv,((yRailL+yNoseL)/2)+curv,xNoseL,yNoseL);
  }
   if(keyCode === RIGHT_ARROW){
     //Surfboard Generator 003
     
      //Background... 
      background(255);  //Clear other info
      fill(40,96,222);
      rect((windowWidth/3)*2,0,windowWidth/3,windowHeight);
      
      //Translate to be on far 1/3rd of screen
      translate((windowWidth/3)*2,0);
      
      //Setup anchor pts
      xNoseL = int(random(150,250));
      yNoseL = int(random(150, 280));

      xNose = int(random(250,350));
      yNose = int(random(150,280));

      xNoseR = int(random(350,450));
      yNoseR = int(random(150,280));

      xTailL = int(random(150,250));
      yTailL = int(random(320,750));

      xTail = int(random(250,350));
      yTail = int(random(700,820));

      xTailR = int(random(350,450));
      yTailR = int(random(320,750));

      curv = int(random(-40,40));
  
     //Curve from Nose Left To Nose Middle
  bezier(xNoseL,yNoseL,((xNoseL+xNose)/2)+curv,((yNoseL+yNose)/2)+curv,((xNoseL+xNose)/2)+curv,((yNoseL+yNose)/2)+curv,xNose,yNose);
  
    
    //Curve from Nose To Nose Right
  bezier(xNose,yNose,((xNose+xNoseR)/2)+curv,((yNose+yNoseR)/2)+curv,((xNose+xNoseR)/2)+curv,((yNose+yNoseR)/2)+curv,xNoseR,yNoseR);
  
    //Curve From Nose Right to Tail Right 
  bezier(xNoseR,yNoseR,((xNoseR+xTailR)/2)+curv,((yNoseR+yTailR)/2)+curv,((xNoseR+xTailR)/2)+curv,((yNoseR+yTailR)/2)+curv,xTailR,yTailR);
  
    //Curve from Tail Right to Tail Middle
  bezier(xTailR,yTailR,((xTailR+xTail)/2)+curv,((yTailR+yTail)/2)+curv,((xTailR+xTail)/2)+curv,((yTailR+yTail)/2)+curv,xTail,yTail);

    //Curve from Tail Middle to Tail Left
  bezier(xTail,yTail,((xTail+xTailL)/2)+curv,((yTail+yTailL)/2)+curv,((xTail+xTailL)/2)+curv,((yTail+yTailL)/2)+curv,xTailL,yTailL);
  
    //Curve from Tail Left to Nose Left
  bezier(xTailL,yTailL,((xTailL+xNoseL)/2)+curv,((yTail+yNoseL)/2)+curv,((xTail+xNoseL)/2)+curv,((yTail+yNoseL)/2)+curv,xNoseL,yNoseL);
    
   }
  
}
