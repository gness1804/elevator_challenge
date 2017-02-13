export default class Person {
  constructor(options) {
    this.name = options.name || '';
    this.currentFloor = options.currentFloor || null;
    this.requestedFloor = options.requestedFloor || null;
    this.weight = options.weight || null;
  }

}
