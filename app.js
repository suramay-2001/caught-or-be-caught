var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;
var counter =3;
var scores=[]
var ondex=0;


function setup() {
  var canvas=createCanvas(600,400);
  canvas.parent("sketch-game");
}

function draw() {
	if(screen == 0){
    startScreen()
      console.log("h");
  }else if(screen == 1 || counter>0){
  	gameOn()
  }else if(screen==2){
    console.log("here")
  	endScreen()
  }
}

function startScreen(){
		background(96, 157, 255)
		fill(255)
		textAlign(CENTER);
		text('WELCOME TO MY CATCHING GAME', width / 2, height / 2)
		text('click to start', width / 2, height / 2 + 20);
		reset();
}

function gameOn(){
	background(0)
  text("score = " + score, 30,20)
  text("lives= "+(counter+1), 570,20)
  ellipse(x,y,20,20)
  rectMode(CENTER)
  rect(mouseX,height-10,50,30)
	y+= speed;
  if(y>height){
    if( counter >0){
      counter --;
      reset();

    }
    else{
      screen =2
    }
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.5
    score+= 1
  }
	if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
	x= random(20,width-20)
}

function endScreen(){
		background(150)
		textAlign(CENTER);
		text('GAME OVER', width / 2, height / 2)
  	text("SCORE = " + score, width / 2, height / 2 + 20)
		text('click to play again', width / 2, height / 2 + 40);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
  scores[ondex]=score;
  ondex++;
	  score=0;
  	speed=2;
  	y=-20;
}
var positives=["You're doing great","Well done","You got this","Keep up the good work","Fantastic"];
var negatives=["Poor judgement","Terrible move","That's pretty bad","Pathetic","Awful"];

function positiveQuote()
{
  for(var i=0;i<10;i++){
  var randomNum=Math.floor(Math.random()*(positives.length));
  document.getElementById('Quote').innerHTML=positives[randomNum];
}
}

function negativeQuote()
{
  for ( var i=0;i<10;i++){
    var randomNum=Math.floor(Math.random()*(negatives.length));
   document.getElementById('Quote').innerHTML=negatives[randomNum];
  }
}
