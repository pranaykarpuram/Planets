var pState = 0;
var state = 0;
var player1, player2, player3, player4;
var register, player;
var bg1;
var database;

function preload(){
  bg1 = loadImage("images/start.jpg");
}
function setup() {
  database = firebase.database();
  createCanvas(windowWidth,windowHeight);
  background(bg1);

}

function draw() {
  background(bg1);
  start = new Start();
  start.start();
  drawSprites();
}