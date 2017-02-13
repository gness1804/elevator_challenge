export default class Elevator {
  constructor(options) {
    this.currentFloor = 0;
    // this.dropOffFloor = options.dropOffFloor || null;
    // this.floorsTraversed = options.floorsTraversed || 0;
    // this.stopsMade = options.stopsMade || 0;
    // this.requests = options.requests || [];
    // this.currentRiders = options.currentRiders || [];
    // this.status = options.status || 'idle';
    // this.direction = options.direction || '';
  }

  requestFloor(options){
    this.currentFloor = options.desiredFloor;
  }

  reset() {
    this.constructor()
  }
}
