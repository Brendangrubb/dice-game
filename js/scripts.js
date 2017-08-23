function currentGame(rollCount) {
  this.rollCount = rollCount;
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


$(document).ready(function() {
  // New Game
  var newGame = new currentGame(0);
  $("#new-game").click(function() {
    newGame = new currentGame(0);
    $("#engage").removeClass("hide-display");
    // Empty Fields
    $("#current-roll").empty();
    $("#your-roll-talley").empty();
    $("#result").empty();
  })


  $("#engage").click(function() {
        // User Number
    var userInputOne = $("#user-number-one").val();
    var userInputTwo = $("#user-number-two").val();
    var userResult = userRandomNumber(userInputOne, userInputTwo);
    $("#current-roll").empty();
    $("#current-roll").append(userResult[0] + " + " + userResult[1] + " = " + userResult[2]);
    $("#your-roll-talley").prepend("<li>" + userResult[2] + "</li>")
  });
});
