function getRandomNumber() {
  var result = Math.floor((Math.random() * 100));
  return result;
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
    var userResult = $("#user-number").val();
    console.log(userResult);
    $("#your-score").empty();
    $("#your-score").append(userResult)
    // Computer Number
    var randomNumberResult = getRandomNumber();
    console.log(randomNumberResult);
    $("#computer-score").empty();
    $("#computer-score").append(randomNumberResult);
    // Display Result
    var result = winOrLose(userResult, randomNumberResult);
    console.log(result);
  });

});
