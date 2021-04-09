var readlineSync = require("readline-sync");


var questionList = [
{
  question: "Where is my college located? ",
  answer: "Karad"
  
},
{
  question: "Who is my fav cricket player? ",
  answer: "Virat kohli"
  
},
{
  question: "Which is my favorite Dish? ",
  answer: "chicken"
  
},
{
  question: "Which is my favorite game ? ",
  answer: "Pubg"
},

]
userScore = 0;
function check(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns === answer.toLowerCase()){
    console.log("Right Answer");
    userScore++;
  }
  else{
    console.log("Wrong Answer");
  }
}
var userName = readlineSync.question("Enter your name : ");
console.log("Welcome! "+userName+".");
console.log("Lets know - How much do you know about Me?");
console.log("Lets start the game...");

for(var i=0; i<questionList.length; i++){
  check(questionList[i].question, questionList[i].answer);
}

console.log("-------------------------------------");
console.log("Your total score is : "+userScore);
console.log("-------------------------------------");