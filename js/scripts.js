function getRandomNumber() {
  var firstDie = Math.floor((Math.random() * 6) + 1);
  var secondDie = Math.floor((Math.random() * 6) + 1);
  var computerResult = firstDie + secondDie;
  var computerArray = [firstDie, secondDie, computerResult];
  return computerArray;
}

function userRandomNumber(userInputOne, userInputTwo) {
  if (userInputOne === "" || userInputTwo === "") {
    var firstDie = Math.floor((Math.random() * 6) + 1);
    var secondDie = Math.floor((Math.random() * 6) + 1);
    var userResult = firstDie + secondDie;
    var userArray = [firstDie, secondDie, userResult];
  } else {
    var firstDie = parseInt(userInputOne);
    var secondDie = parseInt(userInputTwo);
    var userResult = firstDie + secondDie;
    var userArray = [firstDie, secondDie, userResult];
  }
  return userArray;
}

function winOrLose(user, computer) {
  if (user > computer) {
    return "You Win!"
  } else if (user === computer) {
    return "You're Tied!"
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
    var userInputOne = $("#user-number-one").val();
    var userInputTwo = $("#user-number-two").val();
    var userResult = userRandomNumber(userInputOne, userInputTwo);
    $("#your-score").empty();
    $("#your-score").append(userResult[0] + " + " + userResult[1] + " = " + userResult[2]);
    $("#your-score-talley").prepend("<li>" + userResult[2] + "</li>")
    // Computer Number
    var randomNumberResult = getRandomNumber();
    $("#computer-score").empty();
    $("#computer-score").append(randomNumberResult[0] + " + " + randomNumberResult[1] + " = " + randomNumberResult[2]);
    $("#computer-score-talley").prepend("<li>" + randomNumberResult[2] + "</li>");
    // Display Result
    var result = winOrLose(userResult[2], randomNumberResult[2]);
    $("#win-or-lose").empty();
    $("#win-or-lose").append(result);
    $("#win-percentage").empty();
    $("#win-percentage").append(winPercentage(userResult[2], randomNumberResult[2]));
  });

});
