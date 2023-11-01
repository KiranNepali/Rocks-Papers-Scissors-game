// const score = {
//   wins: 0,
//   losses: 0,
//   ties: 0,
// };
let score = JSON.parse(localStorage.getItem("score"));

//get value out of local storage
// console.log(JSON.parse(localStorage.getItem("score")));

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
} //(!score) = same
updateScoreElement();
// let score = JSON.parse(localStorage.getItem("score")) || {
//   wins: 0,
//   losses: 0,
//   ties: 0,
// }; same here we use shortcut defaul operator

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  // compare computerMove with our move and show result
  let result = "";
  // for rock
  if (playerMove === "rock") {
    // compare computerMove with our move and show result
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose";
    } else if (computerMove === "scissor") {
      result = "You win";
    }
  }
  // for paper
  else if (playerMove === "paper") {
    // compare computerMove with our move and show result
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissor") {
      result = "You lose";
    }
  }
  // for scissor
  else if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "You lose";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "scissor") {
      result = "Tie";
    }
  }

  //score
  if (result === "You win") {
    // score.wins = score.wins + 1;
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  //save in local storage(only support string)
  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
  // diplay result in page
  document.querySelector(".js-result").innerHTML = result;
  //display moves in page
  document.querySelector(
    ".js-move"
  ).innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}.`;

  // // show result popup
  // alert(
  //   `
  //    You picked ${playerMove}. Computer picked ${computerMove}.
  //    ${result}
  //    Wins: ${score.wins} Loses: ${score.losses} Ties: ${score.ties}`
  // );
}

function updateScoreElement() {
  // display score in page
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Loses: ${score.losses} Ties: ${score.ties}`;
}

function moveElement() {
  // display move in page
  document.querySelector(
    ".js-move"
  ).innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}`;
}

function pickComputerMove() {
  // genrate random number and get computerMove
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber < 1 && randomNumber > 2 / 3) {
    computerMove = "scissor";
  }
  return computerMove;
}
