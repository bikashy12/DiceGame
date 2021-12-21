document.addEventListener("keypress", function(event){
    if(event.key === "s"){
        startGame(); 
    }
}); 

function startGame(){
// creating random dice number for player 1
var randomNumber1 = Math.floor((Math.random()*6))+1;
var randomNumber1Image = "images/dice"+randomNumber1+".png"; // using concatenation property to select the image
document.querySelector("img.img1").setAttribute("src", randomNumber1Image);


// creating random dice number for player 2
var randomNumber2 = Math.floor((Math.random()*6))+1;
var randomNumber2Image = "images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src", randomNumber2Image); // changing the value of src attribute of img


 // Declaring the winner
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
setTimeout(function(){
    document.querySelector("h1").innerHTML = "Press 's' to start"; 
    }, 1200); 
}
