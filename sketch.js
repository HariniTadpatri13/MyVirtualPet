var dog,happyDog,dogg;
var dogImg,database,foodS,foodStock;
var gameState = "start" 

function preload(){
    dogImg = loadImage("Dog.png")
    dogs = loadImage("DogSleeping.png")
    happyDog= loadImage("happydog.png")
}

function setup() {
   createCanvas(500, 600);
    database=firebase.database();
    foodStock=database.ref('food');
    dog = createSprite(250,250,10,10);
    dog.addImage(dogImg)
    foodStock.on("value",readStock);
	  
  
}


function draw() {  
  background(105, 10, 150)
  dog.scale = 0.3

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog);
}

  if(keyWentDown(DOWN_ARROW)){
    writeStockk(foodS)
    dog.addImage(dogImg);
  
}
if(keyWentDown(LEFT_ARROW)){
  dog.addImage(dogs);
}

  drawSprites();
  stroke("yellow")
  
  textSize(20)
  text("     Press UP_ARROW Key To Feed Milo Milk",20,50)
  text("     Press DOWN_ARROW Key To Refill the milk",20,75)
  text("Food left :"+ foodS,200,105)
  text("     Press LEFT_ARROW To put Milo to sleep",1,400)

}

function readStock(data){
  foodS=data.val();
  
}

function writeStock(x){
  if (x<=0) {
    x=0;
   
  }else{

    x=x-1
   
  }

  database.ref('/').update({
    food:x
  })
}


function writeStockk(x){
  if (x<=0) {
    x=x+20
  }
   

  database.ref('/').update({
    food:x
  })
}




