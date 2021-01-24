class Game {
  constructor(){

    Jet1_Img = loadImage("/Jet1.png");
    Jet2_Img = loadImage("/Jet2.png");

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    Jet1 = createSprite(100,100);
    Jet1.addImage("Jet1",Jet1_Img);
    Jet1.scale = .2;

   
    Jet2 = createSprite(500,300);
    Jet2.addImage("Jet2",Jet2_Img);
    Jet2.scale = .3;

    Jets = [Jet1, Jet2];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();

    if(allPlayers !== undefined){
     background(rgb(198,135,103));
     image(backgroundImg, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      var index = 0;

      var x = 10 ;
      var y;

      for(var plr in allPlayers){
      
        index = index + 1 ;
        
        x = x + 400;

        y = displayHeight - 230 - allPlayers[plr].distance;
        // Jets[index-1].x = x;
        // Jets[index-1].y = y;

          
        if (index === player.index){
         /* stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          Jets[index - 1].shapeColor = "red";*/
        //  console.log(Jets[index - 1].y);
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 20
      player.update();
    }

    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -= 20
      player.update();
    }

    if(player.distance > 1){
      player.score = player.score + 1;
      player.update();
      // score.update();
      resetJet(player.index);
      resetJet(x);

    }
   
  
    drawSprites();

  textSize(30);
  fill("brown");
  stroke("black");
  strokeWeight(13);
  text("Score : " + player.score,100,550)
  text("Score : " + player.score,1000,550)

  }
 
  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
 
} 
