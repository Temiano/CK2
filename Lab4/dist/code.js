"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Transport_1 = require("./Transport");
console.log(1);
let car = new Transport_1.Transport.Car("q", "1", 1234, 123, 123, Transport_1.Transport.Carcasses.CROSSOVER, Transport_1.Transport.CarClasses.A);
console.log(car.info());
