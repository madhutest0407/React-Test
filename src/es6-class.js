class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `Hi! I am ${this.name}.`;
  }
}

class Traveller extends Person {
  constructor(name, age, place) {
    super(name, age);
    this.location = place;
  }
  hasLocation() {
    return !!this.location;
  }
  getDescription() {
    const desc = super.getDescription();
    if (this.hasLocation()) {
      return `${desc} I'm visiting from ${this.location}`;
    }
    return `${desc}`;
  }
}

const me = new Traveller("Madhu", "26");
console.log(me.getDescription());
