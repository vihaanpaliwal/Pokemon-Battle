//var ho_oh,ho_oh_img,lugia,lugia_img;



var allPlayers,database,playerCount,player;
var gameState=0;





function setup(){
  createCanvas(displayWidth-20,displayHeight-30);
  background(rgb(random(0,255),random(0,255),random(0,255)));  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw() {
  
  if(playerCount===2){
    game.update(1);

  }

  
  if(gameState===1){
    clear();
    game.play();

  }
     form.display();
     drawSprites();
}
