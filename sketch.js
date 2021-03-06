var startSprite, startPageImage, edges;
var startSpriteImage;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var normalEnemy1,normalEnemy2,normalEnemy3;
var player;
var gameState;
var normalSprite;
var easySprite;
var hardSprite;
var veryHardSprite;
var intermediateSprite;
var treasure;
var invisibleWall1,invisibleWall2,invisibleWall3,invisibleWall4,invisibleWall5,invisibleWall6,invisibleWall7,invisibleWall8;
var subGameState;
var normalLevelButton;
var hardLevelButton;
var veryHardLevelButton;
var intermediateLevelButton;
var hardEnemy1,hardEnemy2,hardEnemy3;
var ultimateEnemy1,ultimateEnemy2;
var easyLevelGroup, easyToNormal;
var normalLevelGroup,normalToHard;
var hardLevelGroup,hardToVeryHard;
var veryHardLevelGroup,veryHardToIntermediate;
var nELeftmove;
var nERightmove;
var nEAttackR;
var nEAttackL;
var playerRest,playerAttack,playerRmove,playerSneakAttack,playerLmove;

function preload(){
    startPageImage = loadImage('images/start page.jpg');
    startSpriteImage = loadImage('images/levels.jpg');
    nELeftmove = loadAnimation('my game/normalEnemyMove2left.png','my game/normalEnemyMove1left.png');
    nERightmove = loadAnimation('my game/normalEnemyMove1right.png','my game/normalEnemyMove2right.png');
    playerRest = loadAnimation('images/playerAtRest.png');
    playerAttack = loadAnimation('images/playerAttack.png');
    playerRmove = loadAnimation('images/playerRun1.png','images/playerRun2.png');
    playerSneakAttack = loadAnimation('images/playerSneakAttack.png');
    playerLmove = loadAnimation('images/playerL.png','images/playerLMove1.png');
    nEAttackL = loadAnimation('my game/normalEnemyAttackLeft.png');
    nEAttackR = loadAnimation('my game/normalEnemyAttackRight.png');
}

function setup(){
    createCanvas(windowWidth-50,windowHeight-50);
    gameState = "start";
    subGameState = 0;
    edges = createEdgeSprites();
    easyLevelGroup = new Group();
    easyToNormal = false;

}

function draw(){
    if(gameState === "start"){
        imageMode(CENTER);
        image(startPageImage,width/2,height/2,width,height);
        image(startSpriteImage,width/2,height/2,width,height/2);
        easySprite = createSprite(width/2,height/2-120,width/3,50);
        easySprite.visible = false;
        normalSprite = createSprite(width/2,height/2-64,width/3,50);
        normalSprite.visible = false;
    
        if(mousePressedOver(easySprite)){
            gameState="easy";
            easyLevelSprites();
            subGameState = 1;
            clear();
        }
    }
    else if(gameState==="easy" && subGameState===1){
        background(255);
        easyLevelMoves();
        easyLevelMovement();
        easyLevelAttack();
        if(player.collide(treasure)){
            text("YOU GOT THE TREASURE!",400,400);
            player.setVelocity(0,0);
            normalLevelButton = createButton("NEXT LEVEL");
            normalLevelButton.position(450,500);
            normalLevelButton.mousePressed(()=>{
                normalLevelButton.hide();
                easyToNormal = true;
                normalLevelSprites();
            })
            
        }
    }
    if(mousePressedOver(normalSprite)){
        gameState="normal";
        normalLevelSprites();
        subGameState = 1;
        clear();
    }
    else if(gameState==="normal" && subGameState===1){
        //console.log("Hi");
        background(0,55,128);
        normalLevelMoves();
        normalLevelMovement();
        normalLevelAttack();
        if(player.collide(treasure)){
            text("YOU GOT THE TREASURE!",400,400);
            player.setVelocity(0,0);
            hardLevelButton = createButton("NEXT LEVEL");
            hardLevelButton.position(450,500);
            hardLevelButton.mousePressed(()=>{
                hardLevelButton.hide();
                normalToHard = true;
                hardLevelSprites();
            })
            
        }
    }
    if(mousePressedOver(hardSprite)){
        gameState="hard";
        hardLevelSprites();
        subGameState = 1;
        clear();
    }
    else if(gameState==="hard" && subGameState===1){
        background(100,200,50);
        hardLevelMoves();
        hardLevelMovement();
        hardLevelAttack();
        if(player.collide(treasure)){
            text("YOU GOT THE TREASURE!",400,400);
            player.setVelocity(0,0);
            veryHardLevelButton = createButton("NEXT LEVEL");
            veryHardLevelButton.position(450,500);
            veryHardLevelButton.mousePressed(()=>{
                veryHardLevelButton.hide();
                hardToVeryHard = true;
                veryHardLevelSprites();
            })
            
        }
    }
    if(mousePressedOver(veryHardSprite)){
        gameState="veryHard";
        veryHardLevelSprites();
        subGameState = 1;
        clear();
    }
    else if(gameState==="veryHard" && subGameState===1){
        background(100,200,50);
        veryHardLevelMoves();
        veryHardLevelMovement();
        veryHardLevelAttack();
        if(player.collide(treasure)){
            text("YOU GOT THE TREASURE!",400,400);
            player.setVelocity(0,0);
            intermediateLevelButton = createButton("NEXT LEVEL");
            intermediateLevelButton.position(450,500);
            intermediateLevelButton.mousePressed(()=>{
                intermediateLevelButton.hide();
                veryHardToIntermediate = true;
                intermediateLevelSprites();
            })
            
        }
    }
      
    drawSprites();
    fill("red");
    textSize(16);
    text(mouseX+","+mouseY,mouseX,mouseY);
}



function hardLevelSprites(){

}