const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {

  let card;
  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should store a guess', function() {
    expect(turn.guess).to.equal('object');
  });

it('should store a card', function() {
    expect(turn.card).to.equal(card);
});

it('should return the guess of the user', function() {
  turn.returnGuess();
  expect(turn.guess).to.equal('object');
});

it('should return the current Card', function() {
  turn.returnCard();
  expect(turn.card).to.equal(card);
});

it('should evaluate guess to check if correct', function() {
  turn.evaluateGuess();
  expect(turn.evaluateGuess()).to.equal(true);
});

it('should evaluate guess to check if incorrect', function() {
  const turn = new Turn('array', card);
  turn.evaluateGuess();
  expect(turn.evaluateGuess()).to.equal(false);
});

it('should tell if correct', function() {
  turn.giveFeedback();
  expect(turn.giveFeedback()).to.equal("correct!")
});

it('should tell if incorrect', function() {
  const turn = new Turn('array', card);
  turn.giveFeedback();
  expect(turn.giveFeedback()).to.equal("incorrect!")
});
});
