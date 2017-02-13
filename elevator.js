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

  requestFloor(options){
    const that = this;

    if (options.requestor.currentFloor > this.currentFloor) {
      that.whereIsThePerson = 'above you'
    } else if (options.requestor.currentFloor < this.currentFloor) {
      that.whereIsThePerson = 'below you'
    } else if (options.requestor.currentFloor === this.currentFloor) {
      that.whereIsThePerson = 'same floor'
    } else {
      throw new Error('There is an error.')
    }

  }

  reset() {
    this.constructor()
  }
}
