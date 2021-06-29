class Car {
  constructor(options) {
    this.brend = options.brend;
    this.color = options.color;
    this.motor = options.motor;
    this.carBody = options.carBody;
    this.transmission = options.transmission;
    this.accseleration = options.accseleration;
  }
  addAccseleration(num) {
    console.log(this.accseleration + num);
  }
}

class Mitsubishi extends Car {
  constructor(options) {
    super(options);
    this.speed = options.speed;
    this.type = "car";
    options.accseleration = 7;
  }

  description() {
    console.log("Компания Mitsubishi была основана в 1873 году ", this.brend);
  }
}

const MitsubishiLanser = new Mitsubishi({
  brend: "Mitsubishi",
  color: "red",
  motor: "1jz",
  transmission: "auto",
  carBody: "sedan",
  accseleration: 6,
  speed: 162
});

console.log(MitsubishiLanser.accseleration);
// MitsubishiLanser.accseleration;
class Mercedes extends Car {
  constructor(options) {
    super(options);
    this.speed = options.speed;
    this.type = "car";
    this.accseleration = options.accseleration;
  }
}

const mercedesSclass = new Mercedes({
  brend: "Mercedes",
  color: "red",
  motor: "v6",
  transmission: "auto",
  carBody: "sedan",
  accseleration: 5,
  speed: 182
});

console.log(mercedesSclass, MitsubishiLanser);
// const compareAccseleration = () => {
// const minimum = zil.accseleration < mercedesSclass.accseleration ? zil.brend : mercedesSclass.brend

//   return minimum

// }
// console.log(compareAccseleration())

const compareAccseleration = (a, b) => {
  const minimum = a.accseleration < b.accseleration ? a.brend : b.brend;
  const maximum = a.accseleration > b.accseleration ? a.brend : b.brend;
  return `${minimum} is faster then ${maximum}`;
};
console.log(compareAccseleration(mercedesSclass, MitsubishiLanser));
////////////////////////////////////////////////////////
class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
  hide() {
    this.$el.style.display = "none";
  }
  shows() {
    this.$el.style.display = "block";
  }
}
////////////////////////////////////////////////////
class Box extends Component {
  constructor(options) {
    super(options.selector);

    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.background = options.color;
  }
}
const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "red"
});
console.log(box1);

const box2 = new Box({
  selector: "#box2",
  size: 100,
  color: "blue"
});
console.log(box2);

let a = 15;

function fu() {
  a = 10;
}
fu();

console.log(a);
