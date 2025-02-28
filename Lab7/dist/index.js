class Transport {
    constructor(brand, model, bodyType, carClass) {
        this.brand = brand;
        this.model = model;
        this.bodyType = bodyType;
        this.carClass = carClass;
    }
    /**
     * Метод для получения сведений о типе кузова и классе автомобиля
     * @returns {Object} Объект с типом кузова и классом
     */
    getCarDetails() {
        return {
            bodyType: this.bodyType,
            carClass: this.carClass
        };
    }
}
class VehicleStorage {
    constructor() {
        this.vehicles = []; // Инициализация массива
    }
    // Метод для добавления транспортного средства
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    /**
     * Метод для сортировки по модели от Я до А
     * @returns {Transport[]} Отсортированный массив транспортных средств
     */
    sortByModelDescending() {
        return this.vehicles.sort((a, b) => {
            if (a.model < b.model)
                return 1; // Сравнение по модели
            if (a.model > b.model)
                return -1;
            return 0;
        });
    }
    /**
     * Метод для получения всех транспортных средств с заданной маркой
     * @param {string} brand - Марка для поиска
     * @returns {Transport[]} Массив транспортных средств с заданной маркой
     */
    getVehiclesByBrand(brand) {
        return this.vehicles.filter(vehicle => vehicle.brand === brand); // Фильтрация по марке
    }
}
// Пример использования
// Создаем экземпляры транспортных средств
const car1 = new Transport('Toyota', 'Camry', 'Sedan', 'D');
const car2 = new Transport('BMW', 'X5', 'SUV', 'C');
const car3 = new Transport('Audi', 'A4', 'Sedan', 'D');
const car4 = new Transport('Mercedes', 'C-Class', 'Sedan', 'D');
// Создаем хранилище и добавляем транспортные средства
const storage = new VehicleStorage();
storage.addVehicle(car1);
storage.addVehicle(car2);
storage.addVehicle(car3);
storage.addVehicle(car4);
// Сортируем транспортные средства по модели от Я до А
const sortedVehicles = storage.sortByModelDescending();
console.log('Отсортированные модели:', sortedVehicles.map(vehicle => vehicle.model)); // ['Toyota', 'Mercedes', 'BMW', 'Audi']
// Получаем все транспортные средства с маркой 'BMW'
const bmwVehicles = storage.getVehiclesByBrand('BMW');
console.log('Транспортные средства марки BMW:', bmwVehicles.map(vehicle => vehicle.model)); // ['X5']
// Получаем сведения о типе кузова и классе автомобиля для первого автомобиля
const carDetails = car1.getCarDetails();
console.log('Сведения о типе кузова и классе автомобиля:', carDetails); // { bodyType: 'Sedan', carClass: 'D' }
