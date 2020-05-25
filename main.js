
const getUserChoice = userInput => {

  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
    return userInput;
  } else {
    console.log('Error!');
  }

};


// console.log(getUserChoice('Paper')); // should print 'paper'
// console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`


const getRandomChoice = () => {

  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }

};


const userChoice =  prompt("Do you choose rock, paper or scissors?");
// const userChoice = getRandomChoice();
const computerChoice  = getRandomChoice();

console.log(userChoice);
console.log(computerChoice);

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game is a tie!'
  } else {
    return `${userChoice} ${computerChoice}`;
  }


}

function referee(){

    var training = {};

    function setup(winner, loser){
        // init winner key for the fist time if not exist
        if (!training[winner]) training[winner] = {};
        // associate lossing value to winner
        training[winner][loser] = 1;
    }

    function judge(play1, play2){
        if (play1 === play2){ return 'tie'; }
        return ( (training[play1][play2] === 1)? play1: play2 )+' wins!';
    }

    function validate(choice) {
        return choice in training;
    }

    function choices() {
        return Object.keys(training);
    }

    return {
        'learn': learn,
        'judge': judge,
        'validAction': validate,
        'getChoices': choices
    };
}


var ref = referee();
ref.setup('rock','scissors');
ref.setup('paper','rock');
ref.setup('scissors','paper');

// do {
//     var userChoice = prompt("Do you choose rock, paper or scissors?");
// } while(!ref.validAction(userChoice))

var choices = ref.getChoices(),
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

const result = determineWinner(userChoice, computerChoice)

console.log(result);
