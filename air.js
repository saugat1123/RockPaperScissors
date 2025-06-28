let val1=document.querySelector("#rock");
let val2=document.querySelector("#paper");
let val3=document.querySelector("#scissors");
let val;
let compChoice;
let winner;
console.log("Welcome to the Rock, Paper, Scissors game!");
console.log("user choses first");
let userChoice;
const waitForUserChoice = () => {
 val=Math.floor(Math.random()*100)/100;
if(val<0.34){
    compChoice= "rock";
}
if(val<0.67){
    compChoice= "paper";
}
if(val>=0.67){
    compChoice="scissors";  
}
}
val1.addEventListener("click",()=>{
    userChoice="rock";
    console.log(`user chose ${userChoice}`); 
   
});
val2.addEventListener("click",()=>{
    userChoice="paper";
    console.log(`user chose ${userChoice}`);
     
});         
val3.addEventListener("click",()=>{
    userChoice="scissors";
    console.log(`user chose ${userChoice}`);
      
}); 
let resetButton = document.querySelector("#reset");
document.querySelector("#reset").addEventListener("click",()=>{
    waitForUserChoice();
    console.log(`computer chose ${compChoice}`);


if(userChoice===compChoice){
    console.log("tie");
    winner="none";
}

if((userChoice==="rock" && compChoice==="scissors") ||
        (userChoice==="paper" && compChoice==="rock") ||
        (userChoice==="scissors" && compChoice==="paper")){
    console.log("user wins");
    winner="user";
}   

else if((userChoice==="rock" && compChoice==="paper") ||
        (userChoice==="paper" && compChoice==="scissors") ||
        (userChoice==="scissors" && compChoice==="rock"))   {
    console.log("computer wins");
     winner="computer";
}
});

let resultDisplay = document.querySelector("#result");
resetButton.addEventListener("click",()=>{
  resultDisplay.style.visibility="visible";

   resultDisplay.innerText=` Computer chose ${compChoice}
   Winner:${winner}`;
   resultDisplay.style.marginTop="100px";
});
let newGameButton = document.querySelector("#new");
newGameButton.addEventListener("click",()=>{
    resultDisplay.style.visibility="hidden";
     resultDisplay.style.marginTop="0px";
    userChoice="";
    compChoice="";
    winner="";
    resultDisplay.innerText="";
    console.log("New game started");
}   
);