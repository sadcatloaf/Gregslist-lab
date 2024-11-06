import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";



class CarsService {

  createCarListing(carData) { // carData is "RAW" data, it does not have it's "backing class"
    console.log('service creating car', carData);
    const createdCard = new Car(carData)
    AppState.cars.push(createdCard)
    console.log('AppState cars', AppState.cars);
    this.saveCars() // as i add cars, save to localStorage
  }


  deleteCarListing(carId) {
    console.log('service delteting', carId);
    const carToDelete = AppState.cars.find(car => car.id == carId)
    console.log('🔥🚙', carToDelete);
    // const indexToRemove = AppState.cars.findIndex(car => car.id == carId)
    const indexToRemove = AppState.cars.indexOf(carToDelete)
    AppState.cars.splice(indexToRemove, 1)
    this.saveCars()
  }


  saveCars() {
    let stringData = JSON.stringify(AppState.cars)
    localStorage.setItem('gregslist_cars', stringData)
  }


  // This is called from the constructor in the Controller
  loadCars() {
    let stringData = localStorage.getItem('gregslist_cars')
    console.log('🧵💾', stringData);
    let carsData = JSON.parse(stringData)
    console.log('🚙🚙💾', carsData);
    // AppState.cars = carsData
    // carsData.forEach(carData => AppState.cars.push(new Car(carData))) kinda works ish
    // new arr ................POJO transforms into "new Car()"
    if (!carsData) return // don't map over nothing, if the app has no storage
    // if (carsData == null) return // don't map over nothing, if the app has no storage
    const cars = carsData.map(carData => new Car(carData))
    console.log('✨🚙🚙', cars);
    AppState.cars = cars // overwrite the data in the AppState, with the data from localStorage
  }
}

export const carsService = new CarsService()