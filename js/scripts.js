function getRandomNumber() {
  var result = Math.floor((Math.random() * 100));
  return result;
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

  });

});
