let userScore=0;
let compScore=0;

const userS__span = document.getElementById("score__user");
const compS__span = document.getElementById("score__comp");

const result__message = document.getElementById("result");

const rock__img = document.querySelector("#items__1");
const paper__img = document.getElementById("items__2");
const scissor__img = document.getElementById("items__3");


const computer=()=>{

    const computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

const decision=(userChoice,computerChoice)=>{

    userChoice = userChoice.toString();
    computerChoice = computerChoice.toString();
switch(userChoice + computerChoice){
        case "00":
        case "11":
        case "22" :    
                console.log("draw");
                result(userChoice, computerChoice);
                break;


        case "02":
        case "10":
        case "21":
                console.log("Win");
                var player= 'user';
                result(userChoice, computerChoice);
                addScore(player);
                userS__span.innerHTML=  userScore;
                compS__span.innerHTML = compScore;  
                break;
        case "01":
        case "12":
        case "20":
                console.log("lose");  
                var player= 'computer';    
                result(userChoice,computerChoice); 
                 addScore(player); 
                 compS__span.innerHTML = compScore; 
                 userS__span.innerHTML = userScore;       
                break;


}
}

const result= (userChoice,computerChoice) =>{
if (userChoice == computerChoice){
    result__message.innerHTML =`${convertToWord(userChoice)} DRAW ${convertToWord(computerChoice)}`;
}
else if((userChoice == 0 && computerChoice == 2) || (userChoice ==2 && computerChoice ==1)){
    result__message.innerHTML = `${convertToWord(userChoice)} WON to ${convertToWord(computerChoice)}. You Win!`;
}
else if((userChoice == 0 && computerChoice == 1 )|| (userChoice ==1 && computerChoice ==2)){
    result__message.innerHTML = `${convertToWord(userChoice)} LOSE to ${convertToWord(computerChoice)}. You Lose`;
}
}

const convertToWord=(Choice)=>{
if(Choice == 0) return 'Rock';
if(Choice == 1) return 'Paper';
if(Choice == 2) return 'Scissor';
}
const addScore=(player)=>{
    if(player === 'user'){
        userScore++;
    
        console.log("user :"  + userScore);
    }
    else if(player === 'computer'){
        compScore++;
       
        console.log("computer :" + compScore);
    }
}
const startGame = (arg) =>{

    let userChoice = arg;
    let computerChoice = computer();
    decision(userChoice,computerChoice);
}

rock__img.addEventListener('click', function(){

    startGame(0);  //0 = stone
})
paper__img.addEventListener('click', function(){
    startGame(1); //1 = paper

})
scissor__img.addEventListener('click', function(){
    startGame(2); //2 = scissor

})