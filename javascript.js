var positives=["You're doing great","Well done","You got this","Keep up the good work","Fantastic"];
var negatives=["Poor judgement","Terrible move","That's pretty bad","Pathetic","Awful"];

function positiveQuote()
{
  var randomNum=Math.floor(Math.random()*(positives.length));
  document.getElementById('Quote').innerHTML=positives[randomNum];
}

function negativeQuote()
{
  var randomNum=Math.floor(Math.random()*(negatives.length));
  document.getElementById('Quote').innerHTML=negatives[randomNum];
}
