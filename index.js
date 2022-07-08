var randomNumber1=(Math.floor(Math.random()*6))+1;
var diceName1="images/dice"+randomNumber1+".png"; //images/dice1.png-images/dice6.png

var imageSource1 = document.querySelectorAll("img")[0];
imageSource1.setAttribute("src",diceName1);


var randomNumber2=(Math.floor(Math.random()*6))+1;
var diceName2="images/dice"+randomNumber2+".png";

var imageSource2 = document.querySelectorAll("img")[1];
imageSource2.setAttribute("src",diceName2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").textContent="Player 2 wins🚩";
}else{
  document.querySelector("h1").textContent="Oops! A Draw";
}
