$(document).ready(function(){
  var ranks = [2,3,4,5,6,7,8,9,10, "Ace", "queen", "king", "jack"];
  var suits = ["of clubs", "of diamonds", "of spades", "of hearts"];

  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      $("ul").append("<li>" + rank + " " + suit + "</li>");
    });
  });
});
