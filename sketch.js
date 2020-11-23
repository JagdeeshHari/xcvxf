var backgroundg;
var demon;
var character1;
var character2;
var backgroundimg;
var captainimg;
var log;
var logimg;
var log1;
var logimg1;
var logcircle;
var logcircleimg;
var hulkleft;
var hulkleftimg;
var hulkright;
var hulkrightimg;
var fireleft;
var fireleftimg;
var demon;
var demonimg;



function preload() {
backgroundg=loadImage("images/background.png")    
character1=loadImage('images/hulk.png')  
log=loadImage("images/log.png")  
log1=loadImage("images/log.png") 
logcircle=loadImage("images/woodcircle.png") 
hulkleft = loadImage("images/lhulk.png") 
hulkright = loadImage("images/rhulk.png") 
fireleft = loadImage("images/left-fire.png")
demon = loadImage("images/demon.png")
}
function setup() {
    createCanvas(1200,600);
    backgroundimg=createSprite(600,300)
    backgroundimg.addImage(backgroundg);
    logimg=createSprite(1000,400)
    logimg.addImage(log);
    logimg1=createSprite(300,400)
    logimg1.addImage(log);
    logcircleimg=createSprite(700,300)
    logcircleimg.addImage(logcircle);
    hulkimg = createSprite(900, 528)
    fireleftimg = createSprite(900,528)
    fireleftimg .addImage(fireleft);


    
}
function draw() {
 background('yellow');
 
   
    
    hulkimg.addImage(character1);
    

    if (keyDown('up') && hulkimg.y>300) {
       hulkimg.velocityY=-6 
       
    }

    if (hulkimg.y <300) {
       hulkimg.velocityY =hulkimg.velocityY+1
    }
   
 if (keyDown('left')) {
     lhulk();
    }
 if (keyDown('right')) {
    rhulk();
    }
    
if (keyDown('left') && keyDown ('space')) {
    lfire();
}

fireleftimg.visible=false;
    demonspawn();
    
    
drawSprites();
}

function lhulk() {
    hulkimg.addImage(hulkleft);
    hulkimg.x = hulkimg.x - 13
    
}



function rhulk() {
    hulkimg.addImage(hulkright);
    hulkimg.x = hulkimg.x + 13
    
}


function lfire(){
        fireleftimg.visible  =  true;
    fireleftimg.x= hulkimg.x
fireleftimg.velocityX=-5;
}



function demonspawn() {
    if (frameCount % 300 == 0) {
        var r = Math.round(random(50, 800))
        demonimg = createSprite(50, 528, 10, 10)
        demonimg.addImage(demon)
        demonimg.x = r
        if (demonimg.x < 350) {
            demonimg.velocityX = 4;
                        
        }
                
        if (demonimg.x > 350) {
            demonimg.velocityX = -4;
            
        }


    }

}



 function demonlimit(){   
      if (demonimg.x > 1000) {
         demonimg.velocityX = -4;
     }
      if (demonimg.x < 100) {
         demonimg.velocityX = 4;
         console.log(demonimg.x)
     }
 }