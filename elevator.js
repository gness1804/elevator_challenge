export default class Elevator {
  constructor(options) {
    this.currentFloor = 0;
    this.dropOffFloor = null;
    this.floorsTraversed = 0;
    this.stopsMade = 0;
    this.requests = [];
    this.currentRiders = [];
    this.state = 'idle';
    this.personIsAboveYou = false;
    this.personIsBelowYou = false;
    this.youAreOnTheSameFloor = false;
    this.floorsToGetPerson = null,
    this.floorsToTakePerson = null;
  }

  requestFloor(options){
    const that = this;

    console.log('Alex floor', options.requestor.currentFloor)
    console.log('your floor', this.currentFloor)


    if (options.requestor.currentFloor > this.currentFloor) {
      that.personIsAboveYou = true
    }

    console.log('personIsAboveYou', this.personIsAboveYou)


  }

  reset() {
    this.constructor()
  }
}
