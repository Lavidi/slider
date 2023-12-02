function Car(name) {
    this.name = name;
    this.isTurnOn = false;
    this.speed = 0;
    this.engine = {
        v: 1.6,
        horsesPower: 120,
        isTurnOn: false,
    };
};

Car.prototype.start = function () {
    this.isTurnOn = true;
    this.speed = 10;
    this.engine.isTurnOn = true;
    console.log(this.name, '', this.speed);
}


// let car1 = {
//     name: 'reno Stepway',
//     isTurnOn: false,
//     speed: 0,
//     engine: {
//         v: 1.6,
//         horsesPower: 120,
//         isTurnOn: false,
//     },
//     start: function () {
//         this.isTurnOn = true;
//         this.speed = 10;
//         this.engine.isTurnOn = true;
//     }
// }