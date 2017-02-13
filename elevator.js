export default class Elevator {
  constructor(options) {
    this.currentFloor = 0;
    this.dropOffFloor = null;
    this.floorsTraversed = 0;
    this.stopsMade = 0;
    this.requests = [];
    this.currentRiders = [];
    this.state = 'idle';
    this.direction = '';
  }

  requestFloor(options){
    let origCurrentFloor = this.currentFloor;
    this.currentFloor = options.desiredFloor;
    this.state = 'idle';
    this.stopsMade = 2;
    this.floorsTraversed = options.desiredFloor - origCurrentFloor;
  }

  reset() {
    this.constructor()
  }
}
