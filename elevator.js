export default class Elevator {
  constructor(options) {
    this.currentFloor = 0;
    this.dropOffFloor = null;
    this.floorsTraversed = 0;
    this.stopsMade = 0;
    this.requests = [];
    this.currentSimultaneousRiders = [];
    this.riderQueue = [];
    this.state = 'idle';
    this.whereIsThePerson = 'above you';
    this.floorsToGetPerson = null;
    this.floorsToTakePerson = null;
    this.directionToGetPerson = '';
    this.directionToTakePerson = '';
  }

  findCurrentFloor(options) {
    const that = this;
    if (options.requestor.currentFloor > that.currentFloor) {
      that.whereIsThePerson = 'above you'
    } else if (options.requestor.currentFloor < that.currentFloor) {
      that.whereIsThePerson = 'below you'
    } else if (options.requestor.currentFloor === that.currentFloor) {
      that.whereIsThePerson = 'same floor'
    } else {
      throw new Error('There is an error.')
    }
  }

  findOutHowManyFloorsToGetPerson(options) {
    const that = this

    if (options.requestor.currentFloor > that.currentFloor) {
      return options.requestor.currentFloor - that.currentFloor
    } else if (options.requestor.currentFloor < that.currentFloor) {
      return that.currentFloor - options.requestor.currentFloor
    } else if (options.requestor.currentFloor === that.currentFloor) {
      return 0
    } else {
      throw new Error('There is an error.')
    }

  }

  findOutHowManyFloorsToTakePerson(options) {
    const that = this

    if (options.desiredFloor > options.requestor.currentFloor) {
      return options.desiredFloor - options.requestor.currentFloor
    } else if (options.desiredFloor < options.requestor.currentFloor) {
      return options.requestor.currentFloor - options.desiredFloor
    } else {
      throw new Error('There is an error.')
    }
  }

  findOutHowManyFloorsTraversed() {
    return this.floorsToGetPerson + this.floorsToTakePerson
  }

  findOutHowManyStopsMade(howManyFloorsToGetPerson) {
    const that = this

    if (howManyFloorsToGetPerson > 0) {
      that.stopsMade += 2
    } else {
      that.stopsMade += 1
    }
  }

  requestFloor(options) {
    const that = this

    this.findCurrentFloor(options)
    this.floorsToGetPerson = this.findOutHowManyFloorsToGetPerson(options)
    this.floorsToTakePerson = this.findOutHowManyFloorsToTakePerson(options)
    this.findOutHowManyStopsMade(this.floorsToGetPerson)
    this.currentFloor = options.desiredFloor
    this.state = 'idle'
    this.floorsTraversed = this.findOutHowManyFloorsTraversed(options)
  }

  reset() {
    this.constructor()
  }
}
