let x = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];


// for first img
var randomNumber1 = Math.floor((Math.random() * 6));
var imagnew1 = x[randomNumber1];
document.querySelector(".dice .img1").setAttribute("src", imagnew1);

// for second img
var randomNumber2 = Math.floor((Math.random() * 6));
var imagnew2 = x[randomNumber2];
document.querySelector(".dice .img2").setAttribute("src", imagnew2);

// for text
if(imagnew1===imagnew2){
    document.querySelector("h1").textContent="Deaw!";
}
else if (imagnew1>imagnew2){
    document.querySelector("h1").textContent="Player1 won";
}
else if(imagnew1<imagnew2){
    document.querySelector("h1").textContent="Player2 won";
}

