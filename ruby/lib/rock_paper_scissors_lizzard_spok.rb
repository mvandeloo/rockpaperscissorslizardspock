require_relative 'player'

class Game

  PAIRS = {
    rock:     { beats: [:scissors, :lizard] },
    paper:    { beats: [:rock, :spock] },
    scissors: { beats: [:paper, :lizard] },
    lizard: { beats: [:spock, :paper] },
    spock: { beats: [:rock, :scissors] }
  }.freeze

  def initialize(player1, player2)
    @player1, @player2 = player1, player2
  end

  def winner
    return nil if same_pick?
    PAIRS[@player1.pick][:beats].include?(@player2.pick)? @player1 : @player2
  end

  private

  def same_pick?
    @player1.pick == @player2.pick
  end

end

