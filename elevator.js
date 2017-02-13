export default class Elevator {
  constructor() {
    this.currentFloor = 0;
    this.dropOffFloor = null;
    this.floorsTraversed = 0;
    this.stopsMade = 0;
    this.requests = [];
    this.currentRiders = [];
    this.status = 'idle';
    this.direction = '';
  }

  reset() {
    this.constructor()
  }
}
