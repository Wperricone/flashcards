const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');


describe('Game', function() {
  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });


it('should be able to create cards when a game is started', function() {
  const game = new Game();
  game.createCards();
  game.createDeck();
  game.createRound();  expect(game.cards[0]).to.be.an.instanceof(Card);
});

it('should place cards in a deck', function() {
  const game = new Game();
  game.createCards();
  game.createDeck();
  game.createRound();  expect(game.deck).to.be.an.instanceof(Deck);

})
it('should keep track of the current round', function() {
  const game = new Game();
  game.createCards();
  game.createDeck();
  game.createRound();  expect(game.currentRound).to.be.an.instanceof(Round);
});

})
