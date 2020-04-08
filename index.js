
var randomNumber=Math.random();
var no=Math.floor(randomNumber*6)+1;
var image="images/dice"+no+".png";
var change1=document.querySelectorAll("img")[0];
change1.setAttribute("src",image);

var randomNumber1=Math.random();
var no1=Math.floor(randomNumber1*6)+1;
var image1="images/dice"+no1+".png";
var change2=document.querySelectorAll("img")[1];
change2.setAttribute("src",image1);



if(no > no1) {
  document.querySelector("h1").textContent="Player 1 Wins !";
}
else if (no < no1) {
    document.querySelector("h1").textContent="Player 2 Wins !";
}
else if(no===no1) {
    document.querySelector("h1").textContent="Draw ! ";
}

