  var towerImg,tower;
  var ghostRunner,ghostImage,ghostJumping;
  var doorImage,doorGroup,door;
  var climberImage,climbersGroup;
  var invisibleBlock,invisibleBlockGroup;
  var spookySound;
  var GameState='PLAY';
  var unicorn,unicornImg,thunder,thunderImg;


  function preload()
  {
  towerImg=loadImage("tower.png");
  ghostImage=loadImage("unicorn.png");
  climberImage=loadImage("thunder.png");
  doorImage=loadImage("door.png");  
   
  doorGroup=new Group();  
  climbersGroup=new Group();  
  invisibleBlockGroup=new Group();  
  
  
  }
  function setup()
  {
  createCanvas(displayWidth,displayHeight);  
   
  tower=createSprite(displayWidth/2+200,displayHeight,displayWidth+1000,displayHeight+200); 
  tower.addImage("tower",towerImg);
  tower.velocityY=3;  
  ghostRunner=createSprite(displayWidth/2,displayHeight/2,20,20);  
  ghostRunner.addImage("ghost",ghostImage) ;
  ghostRunner.scale=0.1;   
    
    
    
    
  }
 function draw()
  {
   background(0);  
ghostRunner.velocityY=ghostRunner.velocityY+0.5 ;  
  if(GameState==="PLAY")  
  {
    if(keyDown('left_Arrow'))  
  {
    ghostRunner.x=ghostRunner.x-3;     
  }   
    if(keyDown('Right_Arrow'))  
  {
    ghostRunner.x=ghostRunner.x+3;     
  }    
    if(keyDown('space'))  
  {
    ghostRunner.velocityY=-10;
  }  
       
  
   if(tower.y>displayHeight)
  {
     tower.y=displayHeight/2;     
  } 

   
   
   

    
   spawnDoors(); 
    
  if (climbersGroup.isTouching(ghostRunner))
  {
   ghostRunner.velocityY=0;      
    
  }    
   if(invisibleBlockGroup.isTouching(ghostRunner) || ghostRunner.y > displayHeight){
      ghostRunner.destroy();
      GameState = "END"
    } 
  drawSprites();  
  } 
    
  if(GameState==='END'){
     
     stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", displayWidth/2-70,displayHeight/2-50)
  }
 
  }

  function spawnDoors()
  {
  if (frameCount%240===0)
  {
   door=createSprite(displayWidth/2,displayHeight/2+10); 
   door.addImage("door",doorImage) ;
   var climber=createSprite(displayWidth/3,displayHeight/6-90);   
   climber.addImage("climber",climberImage) 
   climber.scale=0.1;
   climber.x=door.x;
   climber.velocityY=2; 
   climber.lifetime=800;
   climbersGroup.add(climber); 
   door.x=Math.round(random(displayWidth/2,displayHeight/2+20))
   door.velocityY=2; 
   door.lifetime=800;
   doorGroup.add(door);
   ghostRunner.depth=door.depth; 
   ghostRunner.depth+=1;
   invisibleBlock=createSprite(displayWidth/3,15);
   invisibleBlock.width = climber.width;
   invisibleBlock.height = 2;
   invisibleBlock.velocityY = 2; 
   invisibleBlock.x = door.x;
   invisibleBlock.lifetime = 800;
   invisibleBlockGroup.add(invisibleBlock); 
   invisibleBlock.debug=true; 
    
  } 
    
    
    
  }

    
    
  