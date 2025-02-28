"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let DocTypes;
    (function (DocTypes) {
        DocTypes["passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        DocTypes["foreignPassport"] = "\u0417\u0430\u0433\u0440\u0430\u043D\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        DocTypes["other"] = "\u0418\u043D\u043E\u0435";
    })(DocTypes = Transport.DocTypes || (Transport.DocTypes = {}));
    let Carcasses;
    (function (Carcasses) {
        Carcasses[Carcasses["SEDAN"] = 0] = "SEDAN";
        Carcasses[Carcasses["CROSSOVER"] = 1] = "CROSSOVER";
    })(Carcasses = Transport.Carcasses || (Transport.Carcasses = {}));
    let CarClasses;
    (function (CarClasses) {
        CarClasses[CarClasses["A"] = 0] = "A";
        CarClasses[CarClasses["B"] = 1] = "B";
        CarClasses[CarClasses["C"] = 2] = "C";
        CarClasses[CarClasses["D"] = 3] = "D";
    })(CarClasses = Transport.CarClasses || (Transport.CarClasses = {}));
    class Owner {
        get surname() {
            return this._surname;
        }
        set surname(surname) {
            this._surname = surname;
        }
        get name() {
            return this._name;
        }
        set name(name) {
            this._surname = name;
        }
        get middleName() {
            return this._middleName;
        }
        set middleName(middleName) {
            this._middleName = middleName;
        }
        get dateOfBirth() {
            return this._dateOfBirth;
        }
        set dateOfBirth(dateOfBirth) {
            this._dateOfBirth = dateOfBirth;
        }
        get typeOfDocument() {
            return this._typeOfDocument;
        }
        set typeOfDocument(typeOfDocument) {
            this._typeOfDocument = typeOfDocument;
        }
        get serial() {
            return this._serial;
        }
        set serial(serial) {
            this._serial = serial;
        }
        get number() {
            return this._number;
        }
        set number(number) {
            this._number = number;
        }
        constructor(surname, name, middleName, dataOfBirth, typeOfDocument, serial, number) {
            this._surname = surname;
            this._name = name;
            this._middleName = middleName;
            this._dateOfBirth = dataOfBirth;
            this._typeOfDocument = typeOfDocument;
            this._serial = serial;
            this._number = number;
        }
        info() {
            console.log(this._surname);
            console.log(this._name);
            console.log(this._middleName);
            console.log(this._dateOfBirth);
            console.log(this._typeOfDocument);
            console.log(this._serial);
            console.log(this._number);
        }
    }
    Transport.Owner = Owner;
    class Vehicle {
        get mark() {
            return this._mark;
        }
        set mark(mark) {
            this._mark = mark;
        }
        get model() {
            return this._model;
        }
        set model(model) {
            this._model = model;
        }
        get year() {
            return this._year;
        }
        set year(year) {
            this._year = year;
        }
        get VIN() {
            return this._VIN;
        }
        set VIN(VIN) {
            this._VIN = VIN;
        }
        get registrationNumber() {
            return this._registrationNumber;
        }
        set registrationNumber(registrationNumber) {
            this._registrationNumber = registrationNumber;
        }
        get owner() {
            return this._owner;
        }
        set owner(owner) {
            this._owner = owner;
        }
        constructor(mark, model, year, VIN, registrationNumber) {
            this._mark = mark;
            this._model = model;
            this._year = year;
            this._VIN = VIN;
            this._registrationNumber = registrationNumber;
        }
        info() {
            console.log(this._mark);
            console.log(this._model);
            console.log(this._year);
            console.log(this._VIN);
            console.log(this._registrationNumber);
        }
    }
    Transport.Vehicle = Vehicle;
    class Car {
        get mark() {
            return this._mark;
        }
        set mark(mark) {
            this._mark = mark;
        }
        get model() {
            return this._model;
        }
        set model(model) {
            this._model = model;
        }
        get year() {
            return this._year;
        }
        set year(year) {
            this._year = year;
        }
        get VIN() {
            return this._VIN;
        }
        set VIN(VIN) {
            this._VIN = VIN;
        }
        get registrationNumber() {
            return this._registrationNumber;
        }
        set registrationNumber(registrationNumber) {
            this._registrationNumber = registrationNumber;
        }
        get owner() {
            return this._owner;
        }
        set owner(owner) {
            this._owner = owner;
        }
        get carcass() {
            return this._carcass;
        }
        set carcass(carcass) {
            this._carcass = carcass;
        }
        get carClass() {
            return this._carClass;
        }
        set carClass(carClass) {
            this._carClass = carClass;
        }
        constructor(mark, model, year, VIN, registrationNumber, carcass, carClass) {
            this._mark = mark;
            this._model = model;
            this._year = year;
            this._VIN = VIN;
            this._registrationNumber = registrationNumber;
            this._carcass = carcass;
            this._carClass = carClass;
        }
        info() {
            console.log(this._mark);
            console.log(this._model);
            console.log(this._year);
            console.log(this._VIN);
            console.log(this._registrationNumber);
            console.log(this._carcass);
            console.log(this._carClass);
        }
    }
    Transport.Car = Car;
    class Motorbike {
        get mark() {
            return this._mark;
        }
        set mark(mark) {
            this._mark = mark;
        }
        get model() {
            return this._model;
        }
        set model(model) {
            this._model = model;
        }
        get year() {
            return this._year;
        }
        set year(year) {
            this._year = year;
        }
        get VIN() {
            return this._VIN;
        }
        set VIN(VIN) {
            this._VIN = VIN;
        }
        get registrationNumber() {
            return this._registrationNumber;
        }
        set registrationNumber(registrationNumber) {
            this._registrationNumber = registrationNumber;
        }
        get owner() {
            return this._owner;
        }
        set owner(owner) {
            this._owner = owner;
        }
        get body() {
            return this._body;
        }
        set body(body) {
            this._body = body;
        }
        get isSport() {
            return this._isSport;
        }
        set isSport(isSport) {
            this._isSport = isSport;
        }
        constructor(mark, model, year, VIN, registrationNumber, body, isSport) {
            this._mark = mark;
            this._model = model;
            this._year = year;
            this._VIN = VIN;
            this._registrationNumber = registrationNumber;
            this._body = body;
            this._isSport = isSport;
        }
        info() {
            console.log(this._mark);
            console.log(this._model);
            console.log(this._year);
            console.log(this._VIN);
            console.log(this._registrationNumber);
            console.log(this._body);
            console.log(this._isSport);
        }
    }
    Transport.Motorbike = Motorbike;
    class VehicleStorage {
        get creationDate() {
            return this._creationDate;
        }
        get storage() {
            return this._storage;
        }
        constructor(storage) {
            this._creationDate = Date.now();
            this._storage = storage;
        }
        /** Да, метод является тем же самым, что и выше, но зато по заданию **/
        getVehicles() {
            return this._storage;
        }
    }
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (exports.Transport = Transport = {}));
