declare class Transport {
    brand: string;
    model: string;
    bodyType: string;
    carClass: string;
    constructor(brand: string, model: string, bodyType: string, carClass: string);
    /**
     * Метод для получения сведений о типе кузова и классе автомобиля
     * @returns {Object} Объект с типом кузова и классом
     */
    getCarDetails(): {
        bodyType: string;
        carClass: string;
    };
}
declare class VehicleStorage {
    private vehicles;
    constructor();
    addVehicle(vehicle: Transport): void;
    /**
     * Метод для сортировки по модели от Я до А
     * @returns {Transport[]} Отсортированный массив транспортных средств
     */
    sortByModelDescending(): Transport[];
    /**
     * Метод для получения всех транспортных средств с заданной маркой
     * @param {string} brand - Марка для поиска
     * @returns {Transport[]} Массив транспортных средств с заданной маркой
     */
    getVehiclesByBrand(brand: string): Transport[];
}
declare const car1: Transport;
declare const car2: Transport;
declare const car3: Transport;
declare const car4: Transport;
declare const storage: VehicleStorage;
declare const sortedVehicles: Transport[];
declare const bmwVehicles: Transport[];
declare const carDetails: {
    bodyType: string;
    carClass: string;
};
