//SURFBOR3D 
//Customised for different screen dimensions
//w/ Info Screen
//Save working..
//9 October 2020
//WIP by Louis Eastaugh

var goshaR;
var goshaL;
var goshaB;
var info = false;


function preload(){
  goshaR=loadFont('data/GoshaSans-Regular.otf'); 
  goshaL=loadFont('data/GoshaSans-Ultralight.otf'); 
  goshaB=loadFont('data/GoshaSans-Bold.otf'); 
  angleMode(DEGREES);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  textFont(goshaR);
  textSize(windowWidth/7);
  textAlign(CENTER,CENTER);
  text('SURFBOR3D',windowWidth/2,(windowHeight/2)-30);
  textSize(17);
  text('Welcome, Click or use your arrow keys to continue.',windowWidth/2,(windowHeight/6)*4);

  //Outer Type
  fill(0);
  textSize(12);
  textFont(goshaL);
  textAlign(RIGHT,CENTER);
  text('INFO',(windowWidth-80),25);
  textAlign(LEFT,CENTER);
  textFont(goshaL);
  //text('Press \'S\' to SAVE',75,25);
  textFont(goshaR);
  textAlign(CENTER,CENTER);
  text('UP',(windowWidth/2),25);
  text('DOWN',(windowWidth/2),windowHeight-25);
  translate(25,windowHeight/2);
  rotate(-90);
  text('LEFT',0,0);                   //Print Left Arrow of Far Left
  rotate(90);                        //Rotate Back 
  translate(-55,-(windowHeight/2));  //Bring back to Top Left position
  translate((windowWidth),(windowHeight/2));
  rotate(90); 
  text('RIGHT',0,0);  
  rotate(-90);
  translate((-windowWidth)+27,-(windowHeight/2));  //Revert to Original Position
}


function draw() {  
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}

  
function keyPressed(){
        if (keyCode === LEFT_ARROW){
      
        //Background & Translation for form  
        fill(42,232,126);  //Fill Green Background Rect
        rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
        translate((windowWidth/2)-450,(windowHeight/2)+300);
        rotate(-90);
    
    
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
       
        noFill(); //No fill for outlines   
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
     fill(224,94,175);  //Fill orange Background Rect
     rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
    
     translate((windowWidth/2)-450,(windowHeight/2)+300);
     rotate(-90);   //Rotate to fit to screen form     
    
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

    noFill(); //No Fill for outlines
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
  
   //SG 003 
   if(keyCode === RIGHT_ARROW){
    //Surfboard Generator 003
    
      //Background... 
      fill(40,96,222);
      rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
    
      translate((windowWidth/2)-450,(windowHeight/2)+300);
      rotate(-90);      
          
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
      
      noFill(); //No fill for outlines
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
  
  
  //SG 004
  if (keyCode === DOWN_ARROW){
   
   
    fill(232,135,42);  //Fill orange Background Rect
    rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
    
    translate((windowWidth/2)-450,(windowHeight/2)+300);
    rotate(-90);
    
    //Nose Position (Middle)
    xNose = 300;
    yNose = random(80,225);
  
    //Nose Position (Left)
    xNoseL = int(random(170,250));
    yNoseL = int(random(80,300));

    //Tail Positions (Middle)
    xTail = 300;
    yTail = int(random(675,820));
 
    //Tail Position (Left)
    xTailL = int(random(170,250));
     yTailL = int(random(600,820));
   
    //Mirror Values 
    xTailR = (300-xTailL)+300;  //Work out Tail Right position from Left Position
    xNoseR = (300-xNoseL)+300;  //Work out Nose Right position from Left Position
 
    //Curve Value to contribute random bend to control point 
    curv = int(random(-30,30));

    //Control pt Positions
    //Variable to allow to mirror
  
    //Top anchor pt Positions
    xTop = ((xNose+xNoseL)/2)+curv;
    yTop = ((yNose+yNoseL)/2)+curv;
  
    xMiddle = ((xNoseL+xTailL)/2)+curv;
    yMiddle = ((yNoseL+yTailL)/2)+curv;
  
    xBottom = ((xTailL+xTail)/2)+curv;
    yBottom =  ((yTailL+yTail)/2)+curv;
  
             
    noFill(); //No fill From Outlines 
    //Create outlines for Left Side
    //Curve from Nose Middle to Nose Left
    //    (First Anchor.Control pt   (x)      . Control pt        (y) .Second Control pt (x)  . Second Control pt (y). Second anchor pt. 
    bezier(xNose,yNose,xTop,yTop,xTop,yTop,xNoseL,yNoseL);
    //Curve from Nose Left To Tail Left
    bezier(xNoseL,yNoseL,xMiddle,yMiddle,xMiddle,yMiddle,xTailL,yTailL);    
    //Curve from Tail Left to Tail Middle
    bezier(xTailL,yTailL,xBottom,yBottom,xBottom,yBottom,xTail,yTail);
    //Use positions of Left side to create Right lineform   
    //Curve from Tail Middle to Tail Right
    bezier(xTail,yTail,((300-xBottom)+300),yBottom,((300-xBottom)+300),yBottom,xTailR,yTailL);  
    //Curve from Tail Right to Nose Right
    bezier(xTailR,yTailL,((300-xMiddle)+300),yMiddle,((300-xMiddle)+300),yMiddle,xNoseR,yNoseL);
    //Curve from Nose Right to Nose Middle
    bezier(xNoseR,yNoseL,((300-xTop)+300),yTop,((300-xTop)+300),yTop,xNose,yNose);
 }
 
 if(keyCode === 83){
  save('SURFBOR3D.png');
   
 }
}

    
//MousePressed for INFO
function mouseClicked(){
    //INFO
      //Show INFO
      if (mouseX>(windowWidth/6)*4 && mouseX<(windowWidth-25) && mouseY<100){
      infoType = windowWidth*0.022;
      infoX = 150;
      infoY = 150;
  
      fill(255);
      rect(80,80,windowWidth-160,windowHeight-160);
      fill(0);
      textSize(infoType);
      textFont(goshaR);
      textAlign(LEFT,CENTER);
      text('"SURFBOR3D" is a set of generative surf craft systems, physically',infoX,infoY);
      text('translated by a human collaborator. The work aims to speculate',infoX,infoY+infoType*1.05);
      text('alternatives to the "performance" framework that surfboards are',infoX,infoY+(infoType*2)*1.05);
      text('assed by, exploring the vast potential of alternative surf craft',infoX,infoY+(infoType*3)*1.05);
      text('forms, which may discover new ways of wave riding.',infoX,infoY+(infoType*4)*1.05);
      text('Surfboards are a disposable artefact, deteriorating over time',infoX,infoY+(infoType*5)*1.05);
      text('and often constructed with materials which don\'t prioritise their',infoX,infoY+(infoType*6)*1.05);
      text('environmental impact. In addition, SURFBOR3D proposes alternative',infoX,infoY+(infoType*7)*1.05);
      text('futures for human and non-human collaboration; a cohesion of',infoX,infoY+(infoType*8)*1.05);
      text('artisanal craft and automation. How can we collectively harness',infoX,infoY+(infoType*9)*1.05);
      text('the potential of the human and the non-human?',infoX,infoY+(infoType*10)*1.05);
  }
}

//MousePressed for Touch 
function mousePressed(){
  
//CLICK (LEFT)
//SG 001 
  if (touchX<(windowWidth/6) && touchY>((windowHeight/6)*2) && touchY<((windowHeight/5)*4)){
     
      
        fill(0);
        rect(80,80,windowWidth-160,windowheight-160);
        fill(42,232,126);  //Fill Green Background Rect
        rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
        translate((windowWidth/2)-450,(windowHeight/2)+300);
        rotate(-90);
    
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
   
        noFill(); //No fill for outlines   
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


//CLICK (UP
//SG 002
  
 if(touchX>((windowWidth/6)*2) && touchX<((windowWidth/6)*4) && touchY<(windowHeight/6)){
    //Surfboard Generator 002
   
    //Background... 
    fill(224,94,175);  //Fill orange Background Rect
    rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
    
    translate((windowWidth/2)-450,(windowHeight/2)+300);
    rotate(-90);   //Rotate to fit to screen form     
    
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

    noFill(); //No fill for outlines   
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
  
//
//SG 003

   if(touchX>((windowWidth/6)*5) && touchY>(windowHeight/5) && touchY<((windowHeight/6)*5)){
    //Surfboard Generator 003
    
      //Background... 
      fill(40,96,222);
      rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
    
      translate((windowWidth/2)-450,(windowHeight/2)+300);
      rotate(-90);      
          
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
  
    noFill(); //No fill for outlines   
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
  
  //DOWN ARROW 
  //SG 004 
 
  if (touchX>((windowWidth/6)*2) && touchX>((windowHeight/6)*4) && touchY>((windowHeight/6)*4)){
   
    fill(232,135,42);  //Fill orange Background Rect
    rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
    
    translate((windowWidth/2)-450,(windowHeight/2)+300);
    rotate(-90);
    
    //Nose Position (Middle)
    xNose = 300;
    yNose = random(80,225);
  
    //Nose Position (Left)
    xNoseL = int(random(170,250));
    yNoseL = int(random(80,300));

    //Tail Positions (Middle)
    xTail = 300;
    yTail = int(random(675,820));
 
    //Tail Position (Left)
    xTailL = int(random(170,250));
     yTailL = int(random(600,820));
   
    //Mirror Values 
    xTailR = (300-xTailL)+300;  //Work out Tail Right position from Left Position
    xNoseR = (300-xNoseL)+300;  //Work out Nose Right position from Left Position
 
    //Curve Value to contribute random bend to control point 
    curv = int(random(-30,30));

    //Control pt Positions
    //Variable to allow to mirror
  
    //Top anchor pt Positions
    xTop = ((xNose+xNoseL)/2)+curv;
    yTop = ((yNose+yNoseL)/2)+curv;
  
    xMiddle = ((xNoseL+xTailL)/2)+curv;
    yMiddle = ((yNoseL+yTailL)/2)+curv;
  
    xBottom = ((xTailL+xTail)/2)+curv;
    yBottom =  ((yTailL+yTail)/2)+curv;
  
             
    noFill(); 
    //Create outlines for Left Side
    //Curve from Nose Middle to Nose Left
    //    (First Anchor.Control pt   (x)      . Control pt        (y) .Second Control pt (x)  . Second Control pt (y). Second anchor pt. 
    bezier(xNose,yNose,xTop,yTop,xTop,yTop,xNoseL,yNoseL); 
    //Curve from Nose Left To Tail Left
    bezier(xNoseL,yNoseL,xMiddle,yMiddle,xMiddle,yMiddle,xTailL,yTailL);
    //Curve from Tail Left to Tail Middle
    bezier(xTailL,yTailL,xBottom,yBottom,xBottom,yBottom,xTail,yTail);
    //Use positions of Left side to create Right lineform
    //Curve from Tail Middle to Tail Right
    bezier(xTail,yTail,((300-xBottom)+300),yBottom,((300-xBottom)+300),yBottom,xTailR,yTailL);
    //Curve from Tail Right to Nose Right
    bezier(xTailR,yTailL,((300-xMiddle)+300),yMiddle,((300-xMiddle)+300),yMiddle,xNoseR,yNoseL);
    //Curve from Nose Right to Nose Middle
    bezier(xNoseR,yNoseL,((300-xTop)+300),yTop,((300-xTop)+300),yTop,xNose,yNose);
  
  }
}

 function deviceShaken(){
    //Surfboard Generator 003
    
      //Background... 
      fill(40,96,222);
      rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
    
      translate((windowWidth/2)-450,(windowHeight/2)+300);
      rotate(-90);      
          
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
  
      noFill(); //No fill for outlines   
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

//MousePressed for Touch 
function touchEnded(){

//LEFT POSITION 
//SG 001 
  if (mouseX<(windowWidth/6) && mouseY>((windowHeight/6)*2) && mouseY<((windowHeight/5)*4)){
    
    fill(42,232,126);  //Fill Green Background Rect
    rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
    translate((windowWidth/2)-450,(windowHeight/2)+300);
    rotate(-90);
    
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
   
    noFill(); //No fill for outlines   
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

//UP ARROW 
//SG 002
  
  if(mouseX>((windowWidth/6)*2) && mouseX<((windowWidth/6)*4) && mouseY<(windowHeight/6)){
     //Surfboard Generator 002
   
     //Background... 
     fill(224,94,175);  //Fill orange Background Rect
     rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
    
     translate((windowWidth/2)-450,(windowHeight/2)+300);
     rotate(-90);   //Rotate to fit to screen form     
    
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

    noFill(); //No fill for outlines   
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
  
//CICK (RIGHT)
//SG 003

   if(mouseX>((windowWidth/6)*5) && mouseY>(windowHeight/5) && mouseY<((windowHeight/6)*5)){
    //Surfboard Generator 003
   
      //Background... 
      fill(40,96,222);
      rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
    
      translate((windowWidth/2)-450,(windowHeight/2)+300);
      rotate(-90);      
          
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
  
      noFill(); //No fill for outlines   
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
  
//CLICK (DOWN) 
//SG 004 
 
  if (mouseX>((windowWidth/6)*2) && mouseX>((windowHeight/6)*4) && mouseY>((windowHeight/6)*4)){
   
    fill(232,135,42);  //Fill orange Background Rect
    rect(50,50,windowWidth-100,windowHeight-100);  //Rectangle Form
    
    translate((windowWidth/2)-450,(windowHeight/2)+300);
    rotate(-90);
    
    //Nose Position (Middle)
    xNose = 300;
    yNose = random(80,225);
  
    //Nose Position (Left)
    xNoseL = int(random(170,250));
    yNoseL = int(random(80,300));

    //Tail Positions (Middle)
    xTail = 300;
    yTail = int(random(675,820));
 
    //Tail Position (Left)
    xTailL = int(random(170,250));
    yTailL = int(random(600,820));
   
    //Mirror Values 
    xTailR = (300-xTailL)+300;  //Work out Tail Right position from Left Position
    xNoseR = (300-xNoseL)+300;  //Work out Nose Right position from Left Position
 
    //Curve Value to contribute random bend to control point 
    curv = int(random(-30,30));

    //Control pt Positions
    //Variable to allow to mirror
  
    //Top anchor pt Positions
    xTop = ((xNose+xNoseL)/2)+curv;
    yTop = ((yNose+yNoseL)/2)+curv;
  
    xMiddle = ((xNoseL+xTailL)/2)+curv;
    yMiddle = ((yNoseL+yTailL)/2)+curv;
  
    xBottom = ((xTailL+xTail)/2)+curv;
    yBottom =  ((yTailL+yTail)/2)+curv;
  
             
    noFill(); 
    //Create outlines for Left Side
    //Curve from Nose Middle to Nose Left
    //    (First Anchor.Control pt   (x)      . Control pt        (y) .Second Control pt (x)  . Second Control pt (y). Second anchor pt. 
    bezier(xNose,yNose,xTop,yTop,xTop,yTop,xNoseL,yNoseL);  
    //Curve from Nose Left To Tail Left
    bezier(xNoseL,yNoseL,xMiddle,yMiddle,xMiddle,yMiddle,xTailL,yTailL);    
    //Curve from Tail Left to Tail Middle
    bezier(xTailL,yTailL,xBottom,yBottom,xBottom,yBottom,xTail,yTail);
    //Use positions of Left side to create Right lineform
    //Curve from Tail Middle to Tail Right
    bezier(xTail,yTail,((300-xBottom)+300),yBottom,((300-xBottom)+300),yBottom,xTailR,yTailL);
    //Curve from Tail Right to Nose Right
    bezier(xTailR,yTailL,((300-xMiddle)+300),yMiddle,((300-xMiddle)+300),yMiddle,xNoseR,yNoseL);
    //Curve from Nose Right to Nose Middle
    bezier(xNoseR,yNoseL,((300-xTop)+300),yTop,((300-xTop)+300),yTop,xNose,yNose);
  }
}

function mousePressed(){
  if(touchX>(windowWidth-150) && touchX<(windowWidth-50) && touchY<200){
    saveCanvas(cnv,'SURFBOR3D','jpg');
    save('SURFBOR3D.jpg');
 }  
}
