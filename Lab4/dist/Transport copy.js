"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    var DocTypes;
    (function (DocTypes) {
        DocTypes["passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        DocTypes["foreignPassport"] = "\u0417\u0430\u0433\u0440\u0430\u043D\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        DocTypes["other"] = "\u0418\u043D\u043E\u0435";
    })(DocTypes = Transport.DocTypes || (Transport.DocTypes = {}));
    var Carcasses;
    (function (Carcasses) {
        Carcasses[Carcasses["SEDAN"] = 0] = "SEDAN";
        Carcasses[Carcasses["CROSSOVER"] = 1] = "CROSSOVER";
    })(Carcasses = Transport.Carcasses || (Transport.Carcasses = {}));
    var CarClasses;
    (function (CarClasses) {
        CarClasses[CarClasses["A"] = 0] = "A";
        CarClasses[CarClasses["B"] = 1] = "B";
        CarClasses[CarClasses["C"] = 2] = "C";
        CarClasses[CarClasses["D"] = 3] = "D";
    })(CarClasses = Transport.CarClasses || (Transport.CarClasses = {}));
    var Owner = /** @class */ (function () {
        function Owner(surname, name, middleName, dataOfBirth, typeOfDocument, serial, number) {
            this._surname = surname;
            this._name = name;
            this._middleName = middleName;
            this._dateOfBirth = dataOfBirth;
            this._typeOfDocument = typeOfDocument;
            this._serial = serial;
            this._number = number;
        }
        Object.defineProperty(Owner.prototype, "surname", {
            get: function () {
                return this._surname;
            },
            set: function (surname) {
                this._surname = surname;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._surname = name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "middleName", {
            get: function () {
                return this._middleName;
            },
            set: function (middleName) {
                this._middleName = middleName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "dateOfBirth", {
            get: function () {
                return this._dateOfBirth;
            },
            set: function (dateOfBirth) {
                this._dateOfBirth = dateOfBirth;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "typeOfDocument", {
            get: function () {
                return this._typeOfDocument;
            },
            set: function (typeOfDocument) {
                this._typeOfDocument = typeOfDocument;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "serial", {
            get: function () {
                return this._serial;
            },
            set: function (serial) {
                this._serial = serial;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "number", {
            get: function () {
                return this._number;
            },
            set: function (number) {
                this._number = number;
            },
            enumerable: false,
            configurable: true
        });
        Owner.prototype.info = function () {
            console.log(this._surname);
            console.log(this._name);
            console.log(this._middleName);
            console.log(this._dateOfBirth);
            console.log(this._typeOfDocument);
            console.log(this._serial);
            console.log(this._number);
        };
        return Owner;
    }());
    Transport.Owner = Owner;
    var Vehicle = /** @class */ (function () {
        function Vehicle(mark, model, year, VIN, registrationNumber) {
            this._mark = mark;
            this._model = model;
            this._year = year;
            this._VIN = VIN;
            this._registrationNumber = registrationNumber;
        }
        Object.defineProperty(Vehicle.prototype, "mark", {
            get: function () {
                return this._mark;
            },
            set: function (mark) {
                this._mark = mark;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (model) {
                this._model = model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "year", {
            get: function () {
                return this._year;
            },
            set: function (year) {
                this._year = year;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "VIN", {
            get: function () {
                return this._VIN;
            },
            set: function (VIN) {
                this._VIN = VIN;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "registrationNumber", {
            get: function () {
                return this._registrationNumber;
            },
            set: function (registrationNumber) {
                this._registrationNumber = registrationNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (owner) {
                this._owner = owner;
            },
            enumerable: false,
            configurable: true
        });
        Vehicle.prototype.info = function () {
            console.log(this._mark);
            console.log(this._model);
            console.log(this._year);
            console.log(this._VIN);
            console.log(this._registrationNumber);
        };
        return Vehicle;
    }());
    Transport.Vehicle = Vehicle;
    var Car = /** @class */ (function () {
        function Car(mark, model, year, VIN, registrationNumber, carcass, carClass) {
            this._mark = mark;
            this._model = model;
            this._year = year;
            this._VIN = VIN;
            this._registrationNumber = registrationNumber;
            this._carcass = carcass;
            this._carClass = carClass;
        }
        Object.defineProperty(Car.prototype, "mark", {
            get: function () {
                return this._mark;
            },
            set: function (mark) {
                this._mark = mark;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (model) {
                this._model = model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "year", {
            get: function () {
                return this._year;
            },
            set: function (year) {
                this._year = year;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "VIN", {
            get: function () {
                return this._VIN;
            },
            set: function (VIN) {
                this._VIN = VIN;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "registrationNumber", {
            get: function () {
                return this._registrationNumber;
            },
            set: function (registrationNumber) {
                this._registrationNumber = registrationNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (owner) {
                this._owner = owner;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "carcass", {
            get: function () {
                return this._carcass;
            },
            set: function (carcass) {
                this._carcass = carcass;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "carClass", {
            get: function () {
                return this._carClass;
            },
            set: function (carClass) {
                this._carClass = carClass;
            },
            enumerable: false,
            configurable: true
        });
        Car.prototype.info = function () {
            console.log(this._mark);
            console.log(this._model);
            console.log(this._year);
            console.log(this._VIN);
            console.log(this._registrationNumber);
            console.log(this._carcass);
            console.log(this._carClass);
        };
        return Car;
    }());
    Transport.Car = Car;
    var Motorbike = /** @class */ (function () {
        function Motorbike(mark, model, year, VIN, registrationNumber, body, isSport) {
            this._mark = mark;
            this._model = model;
            this._year = year;
            this._VIN = VIN;
            this._registrationNumber = registrationNumber;
            this._body = body;
            this._isSport = isSport;
        }
        Object.defineProperty(Motorbike.prototype, "mark", {
            get: function () {
                return this._mark;
            },
            set: function (mark) {
                this._mark = mark;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Motorbike.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (model) {
                this._model = model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Motorbike.prototype, "year", {
            get: function () {
                return this._year;
            },
            set: function (year) {
                this._year = year;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Motorbike.prototype, "VIN", {
            get: function () {
                return this._VIN;
            },
            set: function (VIN) {
                this._VIN = VIN;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Motorbike.prototype, "registrationNumber", {
            get: function () {
                return this._registrationNumber;
            },
            set: function (registrationNumber) {
                this._registrationNumber = registrationNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Motorbike.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (owner) {
                this._owner = owner;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Motorbike.prototype, "body", {
            get: function () {
                return this._body;
            },
            set: function (body) {
                this._body = body;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Motorbike.prototype, "isSport", {
            get: function () {
                return this._isSport;
            },
            set: function (isSport) {
                this._isSport = isSport;
            },
            enumerable: false,
            configurable: true
        });
        Motorbike.prototype.info = function () {
            console.log(this._mark);
            console.log(this._model);
            console.log(this._year);
            console.log(this._VIN);
            console.log(this._registrationNumber);
            console.log(this._body);
            console.log(this._isSport);
        };
        return Motorbike;
    }());
    Transport.Motorbike = Motorbike;
    var VehicleStorage = /** @class */ (function () {
        function VehicleStorage(storage) {
            this._creationDate = Date.now();
            this._storage = storage;
        }
        Object.defineProperty(VehicleStorage.prototype, "creationDate", {
            get: function () {
                return this._creationDate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleStorage.prototype, "storage", {
            get: function () {
                return this._storage;
            },
            enumerable: false,
            configurable: true
        });
        /** Да, метод является тем же самым, что и выше, но зато по заданию **/
        VehicleStorage.prototype.getVehicles = function () {
            return this._storage;
        };
        return VehicleStorage;
    }());
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (exports.Transport = Transport = {}));
