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
};

function winOrLose(roll, rollCount) {
  if (rollCount === 1) {
    if (roll === 7 | roll === 11) {
      var result = ["You Passed on the First Roll!", "n/a"];
    } else if (roll === 2 | roll === 3 | roll === 12) {
      var result = ["Oops, You Crapped Out!", "n/a"];
    } else {
      var result = ["Keep going, the <b>point</b> is " + roll, roll];
      var point = roll;
    }
  } else {
    if (roll === point) {
      var result = ["You Win!!", "n/a"];
    } else if (roll === 7) {
      var result = ["You Sevened Out!", "n/a"];
    } else {
      var result = ["You didn't hit 7 or the point, keep rolling", point];
    }
  }

  return result;
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
    $("#roll-count").empty();
    $("#roll-count").append("0");
    $("#point").empty();
    $("#point").append("n/a");
  })


  $("#engage").click(function() {
    // Game Object
    newGame.rollCount += 1;
    console.log(newGame);

    // Gather and Display User Number
    var userInputOne = $("#user-number-one").val();
    var userInputTwo = $("#user-number-two").val();
    var userResult = userRandomNumber(userInputOne, userInputTwo);
    $("#current-roll").empty();
    $("#current-roll").append(userResult[0] + " + " + userResult[1] + " = " + userResult[2]);
    $("#your-roll-talley").prepend("<li>" + userResult[2] + "</li>")

    // Destermine Win, Lose or Continue
    var result = winOrLose(userResult[2], newGame.rollCount);

    // Data Display
    $("#result").empty();
    $("#result").append(result[0]);
    if (newGame.rollCount === 1) {
      $("#point").empty();
      $("#point").append(result[1]);
    }
    $("#roll-count").empty();
    $("#roll-count").append(newGame.rollCount);
  });
});
