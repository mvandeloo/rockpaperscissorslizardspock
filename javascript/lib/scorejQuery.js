$(document).ready(function() {
  	var player1 = new Player('Alex');
	var player2 = new Player('Martin');
	var game = new Game(player1, player2);
	// var list = $("ul li").toArray();
 //  	var elemlength = list.length;
 //  	var randomnum = Math.floor(Math.random()*elemlength);
 //  	var randomitem = list[randomnum];
 // "$(randomitem).css("display", "block")"
	$('.choices img').click(function() {
		player1.picks($(this).data('name'));
		player2.picks('rock');

      	var winner = game.winner()

      	if (winner) {
      		$("#result").html(winner.name + ' wins');
      	} else { 
      		$("#result").html('draw!');
      	}

	});

});




  



