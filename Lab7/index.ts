class Transport {
    brand: string; 
    model: string; 
    bodyType: string; 
    carClass: string; 

    constructor(brand: string, model: string, bodyType: string, carClass: string) {
        this.brand = brand;
        this.model = model;
        this.bodyType = bodyType;
        this.carClass = carClass;
    }

    /**
     * Метод для получения сведений о типе кузова и классе автомобиля
     * @returns {Object} Объект с типом кузова и классом
     */
    getCarDetails(): { bodyType: string; carClass: string } {
        return {
            bodyType: this.bodyType,
            carClass: this.carClass
        };
    }
}

class VehicleStorage {
    private vehicles: Transport[]; 

    constructor() {
        this.vehicles = []; 
    }

    
    addVehicle(vehicle: Transport): void {
        this.vehicles.push(vehicle);
    }

    /**
     * Метод для сортировки по модели от Я до А
     * @returns {Transport[]} Отсортированный массив транспортных средств
     */
    sortByModelDescending(): Transport[] {
        return this.vehicles.sort((a, b) => {
            if (a.model < b.model) return 1; // Сравнение по модели
            if (a.model > b.model) return -1;
            return 0;
        });
    }

    /**
     * Метод для получения всех транспортных средств с заданной маркой
     * @param {string} brand - Марка для поиска
     * @returns {Transport[]} Массив транспортных средств с заданной маркой
     */
    getVehiclesByBrand(brand: string): Transport[] {
        return this.vehicles.filter(vehicle => vehicle.brand === brand); 
    }
}




const car1 = new Transport('Toyota', 'Camry', 'Sedan', 'D');
const car2 = new Transport('BMW', 'X5', 'SUV', 'C');
const car3 = new Transport('Audi', 'A4', 'Sedan', 'D');
const car4 = new Transport('Mercedes', 'C-Class', 'Sedan', 'D');


const storage = new VehicleStorage();
storage.addVehicle(car1);
storage.addVehicle(car2);
storage.addVehicle(car3);
storage.addVehicle(car4);


const sortedVehicles = storage.sortByModelDescending();
console.log('Отсортированные модели:', sortedVehicles.map(vehicle => vehicle.model)); 


const bmwVehicles = storage.getVehiclesByBrand('BMW');
console.log('Транспортные средства марки BMW:', bmwVehicles.map(vehicle => vehicle.model)); // ['X5']


const carDetails = car1.getCarDetails();
console.log('Сведения о типе кузова и классе автомобиля:', carDetails); // { bodyType: 'Sedan', carClass: 'D' }
