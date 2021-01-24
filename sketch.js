/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;*/

// var engine, world;
var canvas, backgroundImg;
var Jet1,Jet2,Jets,Jet1_Img,Jet2_Img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var score = 0;
var database;
var form, player, game;
var asteroid,asteroid1,asteroidImage,asteroidGroup,asteroid1Group;

function preload(){

  backgroundImg = loadImage("/Background.jpg")
  asteroidImage = loadImage("/asteroid.png")

 }

function setup() {
  canvas = createCanvas(displayWidth - 250 , displayHeight - 150);

  // engine = Engine.create();
  // world = engine.world;
  
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  // World.add(world.border);

  asteroidGroup = new Group();
  asteroid1Group = new Group();

  // Engine.run(engine);

 } 

function draw() {
  
  // Engine.update(engine);

  background(backgroundImg)
  line(displayWidth - 300, displayHeight-300, displayWidth - 300, displayHeight-300);

  spawnAsteroid();
  spawnAsteroid1();

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

  }
  if(gameState === 2){
    game.end();
  }

  /*if(Jet1.isTouching(asteroidGroup) || Jet1.isTouching(asteroid1Group)){

    resetJet(); 

  }*/

 }

 function spawnAsteroid(){

  if (frameCount % 50 === 0) {
    var asteroid = createSprite(-50,10,40,10);
    asteroid.y = Math.round(random(100,480));
    asteroid.addImage(asteroidImage);
    asteroid.scale = 0.15;
    asteroid.velocityX = 5;
    asteroid.lifetime = 1000;
    asteroidGroup.add(asteroid);
  }
   
 }

  function spawnAsteroid1(){

  if (frameCount % 50 === 0) {
    var asteroid1 = createSprite(1300,500,40,10);
    asteroid1.y = Math.round(random(100,480));
    asteroid1.addImage(asteroidImage);
    asteroid1.scale = 0.15;
    asteroid1.velocityX = -5;
    asteroid1.lifetime = 1000;
    asteroid1Group.add(asteroid1);
  }
  
 }

function resetJet(x){

  if(x == 1){
  Jet1.y = 634;
  player.score = player.score + 1;
}
  else   {
  Jet2.y = 634;
  player.score = player.score + 1;

}
 }


 