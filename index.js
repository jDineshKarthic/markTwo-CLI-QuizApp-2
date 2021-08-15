var readlineSync = require("readline-sync");
const chalk = require("chalk");
var scoreLevel1 = 0;
var scoreLevel2 = 0;
var score = 0;

console.log(chalk.green("Please press the Enter Key after entering your answers\n"));
console.log("------------------------------------------------\n");
console.log(chalk.yellow("What's your name? "));

var myName = readlineSync.question();

console.log(chalk.yellow("\nWelcome ") + chalk.cyan.bold(myName) + chalk.yellow(" to ") + chalk.cyan("The General Knowledge Quiz!\n"));

console.log("-----------------------------------------------\n");

console.log(chalk.cyanBright.bold.bgBlack("Rules\n\n1. Choose the correct option out of a/b/c\n2. Each correct answer fetches you 1 point\n3. You get no points for a wrong answer\n4. There are 3 levels in this quiz\n5. There are 5 questions in each level, if you get 3/5 correct in any level, you advance to the next level"));

var levelOneQuestions = [
  {
    question: `
    Continental United States has 4 time zones, can you name at least one of them?
    a. Pacific
    b. Mediterranean
    c. Arabic\n`,
    answer: "a"
  },
  {
    question: `
    What was the Turkish city of Istanbul called before 1930?
    a. Britain
    b. Red City
    c. ConstantinopleRed City\n`,
    answer: "c"
  },
  {
    question: `From which US city do the band The Killers originate?
    a. New York
    b. Las Vegas
    c. Austin\n`,
    answer: "b"
  },
  {
    question: `Name the Coffee shop in US sitcom Friends
    a. Hilly
    b. Henry
    c. Central Perk\n`,
    answer: "c"
  },
  {
    question:`How many human players are there on each side in a polo match?
    a. Seven
    b. Three
    c. Four.\n`,
    answer: "c"
  }
]

var levelTwoQuestions = [
  {
    question: `In what year did Tony Blair become British Prime Minister?
    a. 1999
    b. 1997
    c. 1993\n`,
    answer: "b"
  },
  {
    question: `In which part of your body would you find the cruciate ligament?
    a. Heart
    b. Elbow
    c. Knee\n`,
    answer: "c"
  },
  {
    question: `What is the capital of New Zealand?
    a. Auckland
    b. Wellington
    c. Paris\n`,
    answer: "b"
  },
  {
    question: `Street artist Banksy is originally associated with which British city?
    a. Mysore
    b. Bangalore
    c. Bristol\n`,
    answer: "c"
  },
  {
    question: `From what grain is the Japanese spirit Sake made?
    a. Jam
    b. Rice
    c. Palm\n`,
    answer: "b"
  }
]

var levelThreeQuestions = [
  {
    question: `Which football club plays its home games at Loftus Road
    a. Queen’s Park Rangers
    b. Tunafish and skittles
    c. Mayo and black olives\n`,
    answer: "a"
  },
  {
    question: `What was the old name for a Snickers bar before it changed in 1990?
    a. Dancerss
    b. Marathon
    c. Footwear\n`,
    answer: "b"
  },
  {
    question:`What is the smallest planet in our solar system?
    a. Sun
    b. Mercury
    c. Venus\n`,
    answer: "b"
  },
  {
    question:`Who wrote the novels Gone Girl and Sharp Objects?
    a. Bark Mint
    b. John Adam
    c. Gillian Flynn\n`,
    answer: "c"
  },
  {
    question:`What was the most popular girls name in the UK in 2019?
    a. Olivia
    b. Jessey
    c. Glenn\n`,
    answer: "a"
  }
]


function play(question,answer){
  var userAnswer = readlineSync.question(chalk.blueBright(question));
  if (answer.toUpperCase() === userAnswer.toUpperCase()){
    console.log(chalk.green.bgBlack("\nYou got the right answer.!"));
    score++;
  }else{
    console.log(chalk.red.bgBlack("\OOPS! You got it wrong this time, TRY HARDER."));
  }
}

console.log(chalk.cyanBright.bold.bgBlack("\WELOCME to LEVEL 1\n"));
for(var i = 0; i < levelOneQuestions.length; i++){
  var currentQuestion = (levelOneQuestions[i]);
  play(currentQuestion.question, currentQuestion.answer);
  console.log(chalk.yellowBright("\nYour score is : "),score);
  console.log("------------------------------------------------");
}

scoreLevel1 = score;

if(scoreLevel1 > 2){
  console.log(chalk.greenBright.bold.bgBlack("Congratulations! You have PASSED LEVEL 1. Please proceed with LEVEL 2"));
  console.log("------------------------------------------------");
  console.log(chalk.cyanBright.bold.bgBlack("\WELCOME to LEVEL 2\n"));
  for(var i = 0; i < levelTwoQuestions.length; i++){
  var currentQuestion = (levelTwoQuestions[i]);
  play(currentQuestion.question, currentQuestion.answer);
  console.log(chalk.yellowBright("\nYour score is "),score);
  console.log("------------------------------------------------");
  }
  scoreLevel2 = score - scoreLevel1;
  if(scoreLevel2 > 2){
    console.log(chalk.greenBright.bold.bgBlack("Congratulations! You have cleared LEVEL 2. Please proceed with LEVEL 3"));
    console.log("------------------------------------------------");
    console.log(chalk.cyanBright.bold.bgBlack("\nWelcome to LEVEL 3\n"));
    for(var i = 0; i < levelThreeQuestions.length; i++){
    var currentQuestion = (levelThreeQuestions[i]);
    play(currentQuestion.question, currentQuestion.answer);
    console.log(chalk.yellowBright("\nYour score is "),score);
    console.log("------------------------------------------------");
    }
  }
  else{
    console.log(chalk.redBright("Sorry! You have not cleared LEVEL 2. Please get atleast 3/5 to proceed to LEVEL 3"));
  }
}
else{
  console.log(chalk.redBright("Sorry! You have not cleared LEVEL 1. Please get atleast 3/5 to proceed to LEVEL 2"));
}

console.log(chalk.cyanBright.bold.bgBlack("Your final score is "),score);

var highScores = [
  {
    name: "DINESH",
    score: 10
  },
  {
    name: "RENUKA",
    score: 9
  },
  {
    name: "VARSHA",
    score: 8
  }
]

function compare(score1,score2){
  if (score1 > score2){
    console.log(chalk.greenBright("Congratulations " + (myName) + "!" + " You are one of the top scorers. Please send me a screenshot!"));
  }
}

console.log("------------------------------------");

console.log(chalk.green.bgBlack("Checkout the high scores"));
console.log(chalk.green.bgBlack("",highScores[0].name,highScores[0].score,"\n",highScores[1].name,highScores[1].score,"\n",highScores[2].name,highScores[2].score));

console.log("------------------------------------");

compare(score,highScores[2].score);
