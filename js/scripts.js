function getRandomNumber() {
  var result = Math.floor((Math.random() * 100));
  return result;
}


$(document).ready(function() {
  $("#random-number-button").click(function() {
    console.log(getRandomNumber());
    var randomNumberResult = getRandomNumber();
    $("#random-number-display").empty();
    $("#random-number-display").append(randomNumberResult);

  });

});
