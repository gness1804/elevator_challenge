/* eslint-disable */

require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const Elevator = require('../elevator').default
const Person = require('../person').default

describe('Elevator', function() {
  const elevator = new Elevator()
  const alex = new Person(
    {
    name: "Alex",
    currentFloor: 2,
    }
  )

  const brittany = new Person(
    {
    name: "Brittany",
    currentFloor: -1,
    }
  )

  const meeka = new Person(
    {
    name: "Meeka",
    currentFloor: 4,
    }
  )

  afterEach(function() {
    elevator.reset();
  });

  it('should know if the person is above you', () => {

    elevator.requestFloor({
      requestor: alex,
      desiredFloor: 5}
    )

    assert.strictEqual(elevator.whereIsThePerson, 'above you', 'Alex is above you.');

  });

  it('should know if the person is below you', () => {

    elevator.requestFloor({
      requestor: brittany,
      desiredFloor: 1}
    )

    assert.strictEqual(elevator.whereIsThePerson, 'below you', 'Brittany is below you.');

  });

  it('should know how many floors needed to get the person when the person is above you', () => {

    assert.strictEqual(elevator.findOutHowManyFloorsToGetPerson({
      requestor: alex,
      desiredFloor: 5,
      }
    ), 2);

  });

  it('should know how many floors needed to get the person when the person is below you', () => {

    assert.strictEqual(elevator.findOutHowManyFloorsToGetPerson({
      requestor: brittany,
      desiredFloor: 1,
      }
    ), 1);

  });

  it('should know how many floors needed to get the person when the person is on the same floor', () => {

    elevator.currentFloor = 4

    assert.strictEqual(elevator.findOutHowManyFloorsToGetPerson({
      requestor: meeka,
      desiredFloor: 2,
      }
    ), 0);

  });

  it('should know how many floors to take the person', () => {

    elevator.currentFloor = 1

    assert.strictEqual(elevator.findOutHowManyFloorsToTakePerson({
      requestor: meeka,
      desiredFloor: 2,
      }
    ), 2);

  });

  it('should bring a rider to a floor above their current floor', () => {

    elevator.requestFloor({
      requestor: alex,
      desiredFloor: 5}
    )

    assert.equal(elevator.currentFloor, 5)

    assert.equal(elevator.state, 'idle')

    assert.equal(elevator.stopsMade, 2)

    assert.equal(elevator.floorsTraversed, 5)
  });

  it('should bring a rider to a floor below their current floor', () => {

    elevator.requestFloor({
      requestor: alex,
      desiredFloor: 1}
    )

    assert.equal(elevator.currentFloor, 1)

    assert.equal(elevator.state, 'idle')

    assert.equal(elevator.stopsMade, 2)

    assert.equal(elevator.floorsTraversed, 3)
  });

  it('should only make one stop of the person is on the same floor as the elevator\'s starting floor', () => {

    elevator.currentFloor = 2

    elevator.requestFloor({
      requestor: alex,
      desiredFloor: 1}
    )

    assert.strictEqual(elevator.stopsMade, 1);
  });

  it('should be able to pick up and drop off riders according to their order in the request queue', () => {

    elevator.requestFloor({
      requestor: alex,
      desiredFloor: 1}
    )

    elevator.requestFloor({
      requestor: meeka,
      desiredFloor: 2,
      }
    )

    assert.strictEqual(elevator.stopsMade, 4);
  });

  it('should add each rider to the riderQueue', () => {

    elevator.requestFloor({
      requestor: alex,
      desiredFloor: 1}
    )

    elevator.requestFloor({
      requestor: meeka,
      desiredFloor: 2,
      }
    )

    assert.strictEqual(elevator.riderQueue.length, 2, 'the riderQueue length is 2');

    assert.strictEqual(elevator.riderQueue[0].name, 'Alex');

    assert.strictEqual(elevator.riderQueue[1].name, 'Meeka');

    assert.strictEqual(elevator.riderQueue[1].desiredFloor, 2);

    assert.strictEqual(elevator.riderQueue[0].currentFloor, 2);

  });

});
