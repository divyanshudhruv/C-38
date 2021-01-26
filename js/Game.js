class Game {
  constructor(){}

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

car1=createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);


//here create the carsArray and add the cars as elements
carsArray=[car1,car2,car3,car4]

  }
//======================================================================================================================

  play(){
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){

      //index of the array...

var index=0

// 'x' and 'y' position of the car

var x=0
var y

   for(var plr in allPlayers){
        //increasing index for every 'loop'
        index=index+1;

        // positioning the car a little away in the x axis..
        x=x+200;

        //using data from database for 'y' position...
        y=displayHeight-allPlayers[plr].distance;
        carsArray[index-1].x=x;
        carsArray[index-1].y=y;
        if (index===player.index) {
          carsArray[index-1].shapeColor="red"
          camera.position.x=displayWidth/2
          camera.position.y = carsArray[index - 1].y
                }
    
     }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if (keyIsDown(DOWN_ARROW) && player.index !== null) {
      player.distance -= 50
      player.update();
    }
    drawSprites()
  }
}
