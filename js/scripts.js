function currentGame(rollCount, point) {
  this.rollCount = rollCount;
  this.point = point;
}

function currentPlayer() {
  this.wins = 0;
  this.losses = 0;
  this.cash = 100;
}

// Player Roll Function
function userRandomNumber(userInputOne, userInputTwo) {
  // if (userInputOne === "" || userInputTwo === "") {
    var firstDie = Math.floor((Math.random() * 6) + 1);
    var secondDie = Math.floor((Math.random() * 6) + 1);
    var userResult = firstDie + secondDie;
    var userArray = [firstDie, secondDie, userResult];
  // } else {
  //   var firstDie = parseInt(userInputOne);
  //   var secondDie = parseInt(userInputTwo);
  //   var userResult = firstDie + secondDie;
  //   var userArray = [firstDie, secondDie, userResult];
  // }
  return userArray;
};

// Get Point Funtion
function getPoint(roll, rollCount) {
  var gameEndingRoll = [2,3,7,11,12];
  for (var i = 0; i < gameEndingRoll.length; i++) {
    if (roll != gameEndingRoll[i]) {
      var point = roll;
    } else {
      var point = "no point";
    }
  }
  return point;
}

function winOrLose(roll, rollCount, point, player) {
  if (rollCount === 1) {
    if (roll === 7 | roll === 11) {
      player.wins += 1;
      var result = "You Pass, Motherfuker!";
    } else if (roll === 2 | roll === 3 | roll === 12) {
      player.losses += 1;
      var result = "Tough Titties, You Crapped Out.";
    } else {
      var result = "Keep going, the <b>point</b> is " + roll;
    }
  } else {
    if (roll === point) {
      player.wins += 1;
      var result = "You Hit the Point, You Win!!";
    } else if (roll === 7) {
      player.losses += 1;
      var result = "You Sevened Out!";
    } else {
      var result = "You didn't hit 7 or " + point + ", keep rolling";
    }
  }
  return result;
}

$(document).ready(function() {
  // Game and Player Objects
  var newGame = new currentGame(0);
  var player = new currentPlayer();

  // New Game
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
    newGame.rollCount += 1;
    console.log(newGame);
    console.log(player);

    // Gather and Display User Number
    var userInputOne = $("#user-number-one").val();
    var userInputTwo = $("#user-number-two").val();
    var userResult = userRandomNumber(userInputOne, userInputTwo);
    $("#current-roll").empty();
    $("#current-roll").append(userResult[0] + " + " + userResult[1] + " = " + userResult[2]);
    $("#your-roll-talley").prepend("<li>" + userResult[2] + "</li>")

    // Get point
    if (newGame.rollCount === 1 ) {
      newGame.point = getPoint(userResult[2], newGame.rollCount);
    }

    // Destermine Win, Lose or Continue
    var result = winOrLose(userResult[2], newGame.rollCount, newGame.point, player);
    if (result === "You Pass, Motherfuker!" |
        result === "Tough Titties, You Crapped Out." |
        result === "You Hit the Point, You Win!!" |
        result === "You Sevened Out!") {
      $("#engage").addClass("hide-display");
    }

    // Data Display
    $("#result").empty();
    $("#result").append(result);
    if (newGame.rollCount === 1) {
      $("#point").empty();
      $("#point").append(newGame.point);
    }
    $("#roll-count").empty();
    $("#roll-count").append(newGame.rollCount);
    $("#cash").empty();
    $("#cash").append("$" + player.cash);

    // Player Data Display
    $("#games-won").empty();
    $("#games-won").append(player.wins);
    $("#games-lost").empty();
    $("#games-lost").append(player.losses);

  });
});
