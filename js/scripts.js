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

function winPercentage() {
  var winPercentageMessage =  "computer win total = " +
                              "C-NUMBER" +
                              "<br>" +
                              "user win total = " +
                              "U-NUMBER";
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
    $("#win-percentage").append(winPercentage());
  });

});
