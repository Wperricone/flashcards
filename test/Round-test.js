const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');




describe('Round', function() {

  let card, card1, card2, card3, deck, round, turn;
  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    turn = new Turn('object', card);
  });

  it('should be a function', function() {
  const round = new Round();
  expect(Round).to.be.a('function');
});

it('should return the current card being played', function() {
  expect(round.returnCurrentCard()).to.equal(card1)
});

it('should update the turns count', function() {
  round.takeTurn();
  round.takeTurn();
  expect(round.turns).to.equal(2)
});

it('should change the next card to be the current card', function() {
  round.takeTurn();
  expect(round.returnCurrentCard()).to.equal(card2)
});

it('should be able to record incorrect guess', function() {
  round.takeTurn()
  expect(round.incorrectGuesses).to.deep.equal([1])
});

it('should return feedback if the guess is correct', function() {
  const feedback = round.takeTurn('object');
  expect(feedback).to.equal("correct!")
});

it('should return feedback if the guess is incorrect', function() {
  const feedback = round.takeTurn('array');
  expect(feedback).to.equal("incorrect!")
});

it('should be able to calculate the percentage of correct guesses', function() {
  expect(round.calculatePercentCorrect()).to.equal(100)
});

it('should be able to print a message to the console', function() {
  round.endRound();
  expect(round.endRound()).to.equal(`**Round over!** You answered 100% of the questions correctly!`)
});
});
