function currentGame(rollCount, point) {
  this.rollCount = rollCount;
  this.point = point;
  this.pot = 0;
  this.bet = 0;
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

// betting
  function betting(playerBet) {
    var pot = (parseInt(playerBet) * 2);
    return pot;
  }

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
    // Empty Fields
    $("#current-roll").empty();
    $("#your-roll-talley").empty();
    $("#result").empty();
    $("#roll-count").empty();
    $("#roll-count").append("0");
    $("#point").empty();
    $("#point").append("n/a");

    // Ante
    newGame.pot += 2;
    player.cash -= 1;
    $("#cash").empty();
    $("#cash").append("$" + player.cash);
    $("#pot").empty();
    $("#pot").append("$" + newGame.pot);
    $("#result").append("The ante is $1. How much more would you like to bet?");
    $("#player-bet").removeClass("hide-display");
  });

  // Place Bet
  $("#place-bet").click(function() {
    var playerBet = $("#player-bet-input").val();
    // $("#pot").append(playerBet);
    newGame.bet = parseInt(playerBet);
    newGame.pot += betting(playerBet);
    player.cash -= playerBet;
    $("#cash").empty();
    $("#cash").append("$" + player.cash);
    $("#engage").removeClass("hide-display");
    $("#bet").empty();
    $("#bet").append("$" + newGame.bet);
    $("#pot").empty();
    $("#pot").append("$" + newGame.pot);
    $("#player-bet").addClass("hide-display");
    $("#result").empty();
    $("#result").append("You bet $" + playerBet + " and the pot is at $" + newGame.pot + ". Roll the Bones!!");
  });


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
    };
    if (result === "You Pass, Motherfuker!" |
        result === "You Hit the Point, You Win!!") {
      console.log(player.cash);
      console.log(newGame.pot);
      player.cash += newGame.pot
    };

    // Current Roll Data Display
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
    $("#cash").empty();
    $("#cash").append("$" + player.cash);
    $("#pot").empty();
    $("#pot").append("$" + newGame.pot);
  });
});
