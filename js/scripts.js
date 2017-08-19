function getRandomNumber() {
  var result = Math.floor((Math.random() * 100));
  return result;
}

function userRandomNumber(userInput) {
  if (userInput === "") {
    var userResult = Math.floor((Math.random() * 100));
  } else {
    var userResult = userInput;
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


$(document).ready(function() {
  $("#engage").click(function() {
    // User Number
    var userInput = $("#user-number").val();
    var userResult = userRandomNumber(userInput);
    $("#your-score").empty();
    $("#your-score").append(userResult)
    // Computer Number
    var randomNumberResult = getRandomNumber();
    $("#computer-score").empty();
    $("#computer-score").append(randomNumberResult);
    // Display Result
    var result = winOrLose(userResult, randomNumberResult);
    $("#win-or-lose").empty();
    $("#win-or-lose").append(result);
  });

});
