export default class Elevator {
  constructor(options) {
    this.currentFloor = 0;
    this.dropOffFloor = null;
    this.floorsTraversed = 0;
    this.stopsMade = 0;
    this.requests = [];
    this.currentRiders = [];
    this.state = 'idle';
    this.whereIsThePerson = 'above you';
    this.floorsToGetPerson = null,
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

    //their current floor minus their desired floor or vice versa

    if (options.desiredFloor > options.requestor.currentFloor) {
      return options.desiredFloor - options.requestor.currentFloor
    } else if (options.desiredFloor < options.requestor.currentFloor) {
      return options.requestor.currentFloor - options.desiredFloor
    } else {
      throw new Error('There is an error.')
    }


  }

  // findOutHowManyFloorsTraversed() {
  //   const that = this
  //   if () {
  //
  //   }
  // }

  findOutHowManyStopsMade(howManyFloorsToGetPerson){
    const that = this

    if (howManyFloorsToGetPerson > 0) {
      return 2
    } else {
      return 1
    }
  }

  requestFloor(options){
    const that = this;
    this.findCurrentFloor(options)
    const howManyFloorsToGetPerson = this.findOutHowManyFloorsToGetPerson(options)
    this.floorsToTakePerson = this.findOutHowManyFloorsToTakePerson(options)
    this.stopsMade = this.findOutHowManyStopsMade(howManyFloorsToGetPerson)
    this.currentFloor = options.desiredFloor
    this.state = 'idle'
    // this.floorsTraversed = this.findOutHowManyFloorsTraversed()
  }

  reset() {
    this.constructor()
  }
}
