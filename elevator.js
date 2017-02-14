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

  requestFloor(options){
    const that = this;
    this.findCurrentFloor(options)
    let howManyFloorsToGetPerson = this.findOutHowManyFloorsToGetPerson(options)

    // console.log(howManyFloorsToGetPerson)
  }

  reset() {
    this.constructor()
  }
}
