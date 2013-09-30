
function Player() {

}


Player.prototype.picks = function(pick) {
	this.pick = pick;
}

function Game(player1, player2) {
	console.log("New game created");
	this.player1 = player1;
	this.player2 = player2;
}

var PAIRS = {
    rock:     { beats: ['scissors', 'lizard'] },
    paper:    { beats: ['rock', 'spock'] },
    scissors: { beats: ['paper', 'lizard'] },
    lizard: { beats: ['spock', 'paper'] },
    spock: { beats: ['rock', 'scissors'] }
  }


Game.prototype.winner = function() {
    if (this.player1.pick == this.player2.pick)
    	return null
	if (PAIRS[this.player1.pick].beats.indexOf(this.player2.pick) > -1) {
      return this.player1;
	} else {
      return this.player2;
	}
}