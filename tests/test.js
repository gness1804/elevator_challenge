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

  console.log(brittany)

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

  // xit('should bring a rider to a floor above their current floor', () => {
  //   // Alex requests the elevator to take him from 2 to 5
  //   elevator.requestFloor({
  //     requestor: alex,
  //     desiredFloor: 5}
  //   )
  //
  //   // Assert the current floor of the elevator is the drop off floor
  //   assert.equal(elevator.currentFloor, 5)
  //   // Assert the current status of the elevator is idle after drop off
  //   assert.equal(elevator.state, 'idle')
  //   // Assert the total number of stops is 2 after drop off
  //   assert.equal(elevator.stopsMade, 2)
  //   // Assert the total number of floors traversed
  //   assert.equal(elevator.floorsTraversed, 5)
  // });
  //
  // xit('should bring a rider to a floor below their current floor', () => {
  //   // Alex requests the elevator to take him from 2 to 5
  //   elevator.requestFloor({
  //     requestor: alex,
  //     desiredFloor: 1}
  //   )
  //
  //   // Assert the current floor of the elevator is the drop off floor
  //   assert.equal(elevator.currentFloor, 1)
  //   // Assert the current status of the elevator is idle after drop off
  //   assert.equal(elevator.state, 'idle')
  //   // Assert the total number of stops is 2 after drop off
  //   assert.equal(elevator.stopsMade, 2)
  //   // Assert the total number of floors traversed
  //   assert.equal(elevator.floorsTraversed, 2)
  // });

});
