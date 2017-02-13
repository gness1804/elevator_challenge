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
    let floorsToGetPerson;
    let floorsToTakePerson;
    let personCurrentFloor = options.requestor.currentFloor;
    let personDesiredFloor = options.desiredFloor
    let personIsAboveYou = personCurrentFloor > origCurrentFloor
    let personIsBelowYou = origCurrentFloor > personCurrentFloor
    let youAreOnTheSameFloor = origCurrentFloor === personCurrentFloor

    this.currentFloor = personDesiredFloor;
    this.state = 'idle';

    //find how many stops you have to make 

    if (youAreOnTheSameFloor) {
      this.stopsMade = 1;
    } else {
      this.stopsMade = 2;
    }

    //find floorsToGetPerson

    if (personIsBelowYou) {
      floorsToGetPerson = origCurrentFloor - personCurrentFloor
    } else if (personIsAboveYou) {
      floorsToGetPerson = personCurrentFloor - origCurrentFloor
    } else {
      floorsToGetPerson = 0;
    }

    //find floorsToTakePerson

    if (personCurrentFloor > personDesiredFloor) {
      floorsToTakePerson = personCurrentFloor - personDesiredFloor
    } else {
      floorsToTakePerson = personDesiredFloor - personCurrentFloor
    }

    //find floorsTraversed



  }

  reset() {
    this.constructor()
  }
}
