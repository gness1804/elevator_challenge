export default class Elevator {
  constructor(options) {
    this.currentFloor = 0;
    this.dropOffFloor = null;
    this.floorsTraversed = 0;
    this.stopsMade = 0;
    this.requests = [];
    this.currentRiders = [];
    this.state = 'idle';
    this.personInRelationToElevator = '';
    this.floorsToGetPerson = null,
    this.floorsToTakePerson = null;
  }

  requestFloor(options){
    let origCurrentFloor = this.currentFloor;
    let personCurrentFloor = options.requestor.currentFloor;
    let personDesiredFloor = options.desiredFloor
    // this.personIsAboveYou = personCurrentFloor > origCurrentFloor
    // this.personIsBelowYou = origCurrentFloor > personCurrentFloor
    // this.youAreOnTheSameFloor = origCurrentFloor === personCurrentFloor

    this.currentFloor = personDesiredFloor;
    this.state = 'idle';

    if (personCurrentFloor > origCurrentFloor) {
      this.personInRelationToElevator = 'above'
    } else if (origCurrentFloor < personCurrentFloor) {
      this.personInRelationToElevator = 'below'
    } else {
      this.personInRelationToElevator = 'same'
    }

    //find how many stops you have to make

    // if (youAreOnTheSameFloor) {
    //   this.stopsMade = 1;
    // } else {
    //   this.stopsMade = 2;
    // }
    //
    // //find floorsToGetPerson
    //
    // if (personIsBelowYou) {
    //   floorsToGetPerson = origCurrentFloor - personCurrentFloor
    // } else if (personIsAboveYou) {
    //   floorsToGetPerson = personCurrentFloor - origCurrentFloor
    // } else {
    //   floorsToGetPerson = 0;
    // }
    //
    // //find floorsToTakePerson
    //
    // if (personCurrentFloor > personDesiredFloor) {
    //   floorsToTakePerson = personCurrentFloor - personDesiredFloor
    // } else {
    //   floorsToTakePerson = personDesiredFloor - personCurrentFloor
    // }
    //
    // //find floorsTraversed



  }

  reset() {
    this.constructor()
  }
}
