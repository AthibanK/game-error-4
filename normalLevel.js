function normalLevelSprites(){
    gameState = "normal";
    subGameState = 1;
    if(easyToNormal===true)
        easyLevelGroup.setLifetimeEach(0);
    player = createSprite(50,100,10,10);
    player.shapeColor = "red";
    normalEnemy1 = createSprite(250,100,10,10);
    normalEnemy1.velocityX = -7;
    normalEnemy2 = createSprite(450,300,10,10);
    normalEnemy2.velocityY = 7;
    hardEnemy1 = createSprite(800,600,10,10);
    hardEnemy1.velocityX = 7;
    wall1 = createSprite(100,height-250,200,40);
    wall2 = createSprite(300,height-400,50,200);
    wall3 = createSprite(400,250,50,17);
    wall4 = createSprite(750,300,20,75);
    wall5 = createSprite(100,550,50,17);
    wall6 = createSprite(870,600,20,75);
    wall7 = createSprite(500,750,50,17);
    wall8 = createSprite(650,550,20,75);
    wall9 = createSprite(380,600,50,17);
    wall10 = createSprite(350,800,20,75);
    treasure = createSprite(970,15,20,10);
    treasure.shapeColor = "yellow";
    invisibleWall1 = createSprite(210,100,10,10);
    invisibleWall1.visible = false;
    invisibleWall2 = createSprite(290,100,10,10);
    invisibleWall2.visible = false;
    invisibleWall3 = createSprite(450,260,10,10);
    invisibleWall3.visible = false;
    invisibleWall4 = createSprite(450,340,10,10);
    invisibleWall4.visible = false;
    invisibleWall5 = createSprite(760,600,10,10);
    invisibleWall5.visible = false;
    invisibleWall6 = createSprite(840,600,10,10);
    invisibleWall6.visible = false;
    //console.log("Hi");
    normalLevelGroup.add(player);
    normalLevelGroup.add(normalEnemy1);
    normalLevelGroup.add(normalEnemy2);
    normalLevelGroup.add(hardEnemy1);
    normalLevelGroup.add(wall1);
    normalLevelGroup.add(wall2);
    normalLevelGroup.add(wall3);
    normalLevelGroup.add(wall4);
    normalLevelGroup.add(wall5);
    normalLevelGroup.add(wall6);
    normalLevelGroup.add(wall7);
    normalLevelGroup.add(wall8);
    normalLevelGroup.add(wall9);
    normalLevelGroup.add(wall10);
    normalLevelGroup.add(treasure);
    normalLevelGroup.add(invisibleWall1);
    normalLevelGroup.add(invisibleWall2);
    normalLevelGroup.add(invisibleWall3);
    normalLevelGroup.add(invisibleWall4);
    normalLevelGroup.add(invisibleWall5);
    noramlLevelGroup.add(invisibleWall6);
}
function normalLevelMoves(){
    normalEnemy1.bounceOff(invisibleWall1);
    normalEnemy1.bounceOff(invisibleWall2);
    normalEnemy2.bounceOff(invisibleWall3);
    normalEnemy2.bounceOff(invisibleWall4);
    hardEnemy1.bounceOff(invisibleWall5);
    hardEnemy1.bounceOff(invisibleWall6);
    player.collide(edges);

    if(keyDown(UP_ARROW)){
        player.velocityY = -5;
        player.velocityX = 0;
    }
    if(keyWentUp(UP_ARROW)){
        player.velocityX = 0;
        player.velocityY = 0;
    }
    if(keyDown(DOWN_ARROW)){
        player.velocityY = 5;
        player.velocityX = 0;
    }
    if(keyWentUp(DOWN_ARROW)){
        player.velocityX = 0;
        player.velocityY = 0;
    }
    if(keyDown(RIGHT_ARROW)){
        player.velocityY = 0;
        player.velocityX = 5;
    }
    if(keyWentUp(RIGHT_ARROW)){
        player.velocityX = 0;
        player.velocityY = 0;
    }
    if(keyDown(LEFT_ARROW)){
        player.velocityY = 0;
        player.velocityX = -5;
    }
    if(keyWentUp(LEFT_ARROW)){
        player.velocityX = 0;
        player.velocityY = 0;
    }
    if(player.collide(treasure)){
        text("YOU GOT THE TREASURE!",400,400);
      player.setVelocity(0,0);
        hardLevelButton = createButton("NEXT LEVEL");
        hardLevelButton.position(450,500)
        hardLevelButton.mousePressed(()=>{
            gameState = "hard";
            subGameState = 1;
            hardLevelButton.hide();
            
        })  
    } 
}
function normalLevelMovement(){
    if(player.isTouching(wall1)){
        player.collide(wall1);
    }
    if(player.isTouching(wall2)){
        player.collide(wall2);
    }
    if(player.isTouching(wall3)){
        player.collide(wall3);
    }
    if(player.isTouching(wall4)){
        player.collide(wall4);
    }
    if(player.isTouching(wall5)){
        player.collide(wall5);
    }
    if(player.isTouching(wall6)){
        player.collide(wall6);
    }
    if(player.isTouching(wall7)){
        player.collide(wall7);
    }
    if(player.isTouching(wall8)){
        player.collide(wall8);
    }
    if(player.isTouching(wall9)){
        player.collide(wall9);
    }
    if(player.isTouching(wall10)){
        player.collide(wall10);
    }
}
function normalLevelAttack(){
    if(keyDown("a")){
        if(player.isTouching(normalEnemy1)){
            normalEnemy1.visible = false;
        }
        if(player.isTouching(normalEnemy2)){
            normalEnemy2.visible = false;
        }
        if(player.isTouching(hardEnemy1)){
            hardEnemy1.visible = false;
        }
    }
}