function getRandomPick() {
  var list = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  var elemlength = list.length; //5

  var randomnum = Math.floor(Math.random()*elemlength);
  var randomitem = list[randomnum]; // 'scissors'

  return randomitem;
  // $(randomitem).css("display", "block");
}


$(document).ready(function() {
  	var player1 = new Player('Sam');
	var player2 = new Player('Martin');
	var game = new Game(player1, player2);
	// var list = $("ul li").toArray();
 //  	var elemlength = list.length;
 //  	var randomnum = Math.floor(Math.random()*elemlength);
 //  	var randomitem = list[randomnum];
 // "$(randomitem).css("display", "block")"
	$('.choices img').click(function() {
		player1.picks($(this).data('name'));
		var randpick = getRandomPick();
		player2.picks(randpick);
		console.log(randpick)

      	var winner = game.winner()

      	if (winner) {
      		$("#result").html(winner.name + ' wins');
      	} else { 
      		$("#result").html('draw!');
      	}

	});

});






