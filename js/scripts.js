function getRandomNumber() {
  var result = Math.floor((Math.random() * 100));
  return result;
}

function userRandomNumber(userInput) {
  if (userInput === "") {
    var userResult = Math.floor((Math.random() * 100));
  } else {
    var userResult = parseInt(userInput);
  }
  return userResult;
}

function winOrLose(user, computer) {
  if (user > computer) {
    return "You Win!"
  } else {
    return "You Lose!"
  }
}

var computerWinTotal = 0;
var userWinTotal =  0;
var numberOfWins = 0;
var numberOfGames = 0;
function winPercentage(userResult, randomNumberResult) {
  userWinTotal +=  userResult;
  computerWinTotal += randomNumberResult;
  if (userResult > randomNumberResult) {
    numberOfWins += 1;
    numberOfGames += 1;
  } else {
    numberOfGames += 1;
  };

  userWinPercentage = Math.floor((numberOfWins/numberOfGames) * 100);
  var winPercentageMessage =  "computer win total = " +
                              computerWinTotal +
                              "<br>" +
                              "user win total = " +
                              userWinTotal +
                              "<br>" +
                              "user win Percentage = " +
                              userWinPercentage +
                              "%";
  return winPercentageMessage;
}

$(document).ready(function() {
  $("#engage").click(function() {
    // User Number
    var userInput = $("#user-number").val();
    var userResult = userRandomNumber(userInput);
    $("#your-score").empty();
    $("#your-score").append(userResult)
    $("#your-score-talley").prepend("<li>" + userResult + "</li>")
    // Computer Number
    var randomNumberResult = getRandomNumber();
    $("#computer-score").empty();
    $("#computer-score").append(randomNumberResult);
    $("#computer-score-talley").prepend("<li>" + randomNumberResult + "</li>");
    // Display Result
    var result = winOrLose(userResult, randomNumberResult);
    $("#win-or-lose").empty();
    $("#win-or-lose").append(result);
    $("#win-percentage").empty();
    $("#win-percentage").append(winPercentage(userResult, randomNumberResult));
  });

});
